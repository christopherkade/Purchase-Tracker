<template>
   <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <div class="navbar-item">
            <total />
        </div>

        <button class="button navbar-burger" v-on:click="isActive = !isActive">
            <span></span>
            <span></span>
            <span></span>
        </button>
      </div>

      <div class="navbar-menu" v-bind:class="{ 'is-active': isActive }">
          <div class="navbar-end">
              <a class="navbar-item" v-on:click="signout">
                  Sign out
              </a>
          </div>
      </div>
    </nav>
</template>

<script>
import Total from './Spending/Total'
import firebase from 'firebase'
import { store } from '@/store'

export default {
  name: 'navbar',
  store,
  data () {
      return {
        isActive: false
      }
  },
  components: {
      Total
  },
  methods: {
      signout () {
        store.commit('resetPurchases')
        firebase.auth().signOut().then(() => {
            this.$router.replace('/STracker/login')
        })
      }
  }
}
</script>

<style scoped>
.navbar {
    background: #67b26f;
    background: -webkit-linear-gradient(to right, #67b26f, #4ca2cd);
    background: linear-gradient(to right, #67b26f, #4ca2cd);
}

.navbar-burger {
    background-color: transparent;
    border: none;
}
</style>


