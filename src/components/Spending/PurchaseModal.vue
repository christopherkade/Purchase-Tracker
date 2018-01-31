<template>
  <div class="modal" v-bind:class="{ 'is-active': this.$store.getters.showModal }">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <input class="modal-card-title input" v-model="purchase.title"/>
    </header>
    <section class="modal-card-body">
      <input class="input" v-model="purchase.price" />
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success" v-on:click="savePurchase()">Save changes</button>
      <button class="button" v-on:click="closeModal()">Cancel</button>
    </footer>
  </div>
</div>
</template>

<script>
import { store } from '@/store.js'
import db from '@/database.js'

let dbRef = db.ref('purchases/')

export default {
  name: 'modal',
  store,
  computed: {
    purchase: function () {
      return {
        id: store.getters.purchasesNum,
        title: 'New purchase ' + store.getters.purchasesNum,
        price: 0
      }
    }
  },  
  methods: {
      closeModal () {
          this.$store.commit('hideModal')
      },
      savePurchase () {
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

</style>


