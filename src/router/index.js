import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Auth/Login'
import firebase from 'firebase'

Vue.use(Router)

// TODO: Solve problem where url is https://christopherkade.com/login istead of https://christopherkade.com/STracker/login and reload takes us back to
// https://christopherkade.com
let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/STracker/login'
    },
    {
      path: '/STracker/home',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/STracker/login',
      name: 'Login',
      component: Login
    },
    {
      path: '*',
      redirect: '/STracker/login'
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('home')
  else next()
})

export default router