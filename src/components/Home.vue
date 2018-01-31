<template>
  <div class="home">
    <navbar />
    <div class="content">
      <container/>      
    </div>
  </div>
</template>

<script>
import Container from "./Spending/Container";
import Navbar from './Navbar'

export default {
  name: "Home",  
  components: {
    Container,
    Navbar
  }
};
</script>

<style scoped>
.home {
  height: 100%;
  background-color: #F9F9F9;  
}

.content {
  padding: 5em 1em 1em 1em;  
  height: 100%;
}
</style>
