// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store'
import firebase from 'firebase'

// For Bulma
require('./assets/sass/theme.sass')

Vue.config.productionTip = false

// Setup your Firebase config here
let app;
firebase.auth().onAuthStateChanged(user => {
  // Save user info
  store.commit('setUser', user)
  // if (user) {
  // } else {
  //   store.commit('setUser', null)
  // }
  if (!app) {
    app = new Vue({
      store,
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
})