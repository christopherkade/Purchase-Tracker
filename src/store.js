import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.config.debug = true

export const store = new Vuex.Store({
    state: {
        purchases: [],
        showModal: false,
        user: null
    },
    getters: {
        purchases: state => state.purchases,
        purchasesNum: state => state.purchases.length,
        totalPrice: state => {
            let total = 0
            state.purchases.forEach(purchase => {
                total = total + parseFloat(purchase.price)
            });
            return total
        },
        showModal: state => state.showModal,
        user: state => state.user
    },
    mutations: {
        // Adds a new purchase to the array
        addPurchase(state, newPurchase) {
            state.purchases.push({
                id: newPurchase.id,
                title: newPurchase.title,
                price: newPurchase.price
            })
        },
        // Deletes a purchase with the given id
        deletePurchase(state, id) {
            var index = state.purchases.map(purchase => {
                return purchase.id
            }).indexOf(id)
            state.purchases.splice(index, 1)
        },
        resetPurchases: state => state.purchases = [],
        displayModal: state => state.showModal = true,
        hideModal: state => state.showModal = false,
        setUser(state, newUser) {
            state.user = newUser
        }
    }
});