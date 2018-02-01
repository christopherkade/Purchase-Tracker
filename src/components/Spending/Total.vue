<template>
    <div class="total-value">
      Total: <span>{{this.$store.getters.totalPrice}} €</span> 
    </div>
</template>

<script>
import { store } from '@/store.js'

export default {
  name: 'total',
  store
}
</script>

<style scoped>
.total-value {
    border-radius: 5px;
    padding: 5px 15px;
    font-size: 1.5em;
    text-decoration: none;
    display: inline-block;
    width: auto;
}

span {
    font-weight: bold;
}

@media (max-width: 850px) {
    .total-value {
        font-size: 15px;
        padding: 5px 10px;
    }
}
</style>
