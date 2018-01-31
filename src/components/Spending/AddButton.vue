<template>
  <!-- <a v-on:click="buttonClick()">New purchase</a> -->
  <div class="fab" v-on:click="buttonClick"> + </div>
</template>

<script>
import { store } from './../../store'

export default {
    name: 'add-button',
    store,
    methods: {
      buttonClick() {
        this.$store.commit('displayModal');
      }
    }   
}
</script>

<style scoped>
.fab {
   transition: all 0.1s ease-in-out; 
   box-shadow: 0 3px 3px 0 #666;
   background-color: #4CA2CB;
   text-align: center;
   border-radius: 50%;
   line-height: 65px; 
   font-size: 35px;
   position: fixed;
   color: white;
   bottom: 50px;
   height: 70px;
   width: 70px;
   left: 50px;
}
 
.fab:hover {
  transform: scale(1.05);
  cursor: pointer;
}

@media (max-width: 850px) {
  .fab {
    line-height: 45px;
    font-size: 30px;
    height: 50px;
    bottom: 15px;
    width: 50px;
    left: 15px;
  }
}
</style>
