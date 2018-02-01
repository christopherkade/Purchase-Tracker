<template>
    <div class="card">
      <img class="card-delete" src="@/assets/delete.svg" v-on:click="deletePurchase"/>
      <div class="card-content">
        <p class="title">
          {{purchase.title}}
        </p>
        <p class="subtitle">
          {{purchase.price}} €
        </p>
      </div>
    </div>
</template>

<script>
import db from '@/database.js'
import { store } from '@/store'

export default {
  name: 'Purchase',
  props: [ 'purchase' ],
  store,
  methods: {
    deletePurchase () {      
      let dbRef = db.ref('purchases/' + store.getters.user.uid + '/' + this.purchase.id)
      dbRef.remove().then(() => {
        this.$store.commit('deletePurchase', this.purchase.id);        
      })
    }
  }
}
</script>

<style scoped>
.card-delete {
  display: none;
}

.card:hover {
  opacity: 0.5;
}

.card:hover .card-delete {
  position: absolute;
  width: 40px;
  top: 40%;
  left: 48%;
  display: inline-block;
  text-align: center;
}

.card-delete:hover {
  cursor: pointer;
}

@media (max-width: 850px) {
    .title {
      font-size: 1.5em;
    }
}
</style>


