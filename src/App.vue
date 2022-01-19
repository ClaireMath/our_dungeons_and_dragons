<template>
  <div id="app">

    <div><Navbar/>
    
    <router-view />
    
  </div>

  </div>
</template>

<script>
import Navbar from './views/Navbar.vue'


export default {
  name: 'App',
  components: {
    Navbar,
    
   
  }
}


</script>

<style scoped>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}


</style>
