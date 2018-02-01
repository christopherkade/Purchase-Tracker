<template>
  <div class="modal" v-bind:class="{ 'is-active': this.$store.getters.showModal }">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <input class="modal-card-title input is-primary" v-model="purchase.title" placeholder="E.g: Cereal"  />
    </header>
    <section class="modal-card-body">
      <input class="input is-primary" v-model="purchase.price" placeholder="E.g: 42"/>
    </section>
    <footer class="modal-card-foot">
      <button class="button is-primary" v-on:click="savePurchase()">Save changes</button>
      <button class="button is-danger" v-on:click="closeModal()">Cancel</button>
    </footer>
  </div>
</div>
</template>

<script>
import { store } from '@/store.js'
import db from '@/database.js'

export default {
  name: 'modal',
  store,
  computed: {
    purchase: function () {
      return {
        id: store.getters.purchasesNum,
        title: '',
        price: null
      }
    }
  },  
  methods: {
      closeModal () {
        this.$store.commit('hideModal')
      },
      savePurchase () {
        let dbRef = db.ref('purchases/' + store.getters.user.uid)
        
        var id = this.purchase.id
        dbRef.push({
            title: this.purchase.title,
            price: this.purchase.price
        });        
        this.purchase.id = this.$store.getters.purchasesNum
        this.$store.commit('hideModal')        
      }
  }
}
</script>

<style scoped>
.input {
  border: none;
  background-color: transparent;
  box-shadow: none;
}

.input:focus {
  border: none;
  box-shadow: none;
}
</style>


