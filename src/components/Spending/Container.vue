<template>
    <div class="container">
        <purchase v-for="purchase of this.$store.getters.purchases" v-bind:key="purchase.id" :purchase="purchase"/>
        <spinner v-if="loading" />
        <modal />    
        <add-button />
    </div>
</template>

<script>
import Purchase from './Purchase'
import AddButton from './AddButton'
import Total from './Total'
import Modal from './PurchaseModal'
import Spinner from '@/components/Utils/Spinner'
import { store } from '@/store.js'
import firebase from 'firebase'
import db from '@/database.js'

export default {
    name: 'Container',
    components: {
        Purchase,
        AddButton,
        Modal,
            Spinner,
    },
    data () {
        return {
            loading: false
        }
    },    
    methods: {
        // Catches purchase addition / deletion / edition
        managePurchases () {
            let dbRef = db.ref('purchases/' + store.getters.user.uid)
            
            this.loading = true
            // Load purchases from the database
            dbRef.on('value', snapshot => {
                // Save them one by one
                for (let id in snapshot.val()) {
                    let purchase = snapshot.val()[id]
                    // If it's a new object, add it
                    if (!this.$store.getters.purchases.some(p => p.id === id)) {
                        this.$store.commit('addPurchase', {
                            id: id,
                            title: purchase.title,
                            price: purchase.price
                        })
                    }
                }
                this.loading = false
            })
        }
    },
    created: function() {
        this.managePurchases()
    }
}
</script>

<style scoped>
.container {
    text-align: center;
    height: 100%;
}
</style>


