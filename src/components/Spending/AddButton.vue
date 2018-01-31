<template>
  <a v-on:click="buttonClick()">New purchase</a>
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
a {
    margin-top: 15px;
    border-radius: 5px;
    padding: 5px 15px;
    font-size: 1em;
    text-decoration: none;
    color: #fff;    
    display: inline-block;
    background-color: #55acee;
    box-shadow: 0px 5px 0px 0px #3C93D5;    
}

a:active {
  transform: translate(0px, 5px);
  -webkit-transform: translate(0px, 5px);
  box-shadow: 0px 1px 0px 0px;
}

a:hover {
  background-color: #4CA2CB;
}

@media (max-width: 850px) {
  a {
    font-size: 15px;
    padding: 5px 10px;
  }
}

</style>
