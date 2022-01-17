<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <Action/> -->
    <!-- <NotFound/> -->
    <router-view/>
  </div>
</template>

<script>
// import Action from './views/Action.vue'
// import NotFound from './views/NotFound.vue'

export default {
  name: 'App',
  components: {
    // Action, 
    // NotFound
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
