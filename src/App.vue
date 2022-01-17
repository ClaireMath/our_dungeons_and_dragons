<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Action/>
    <router-view/>
  </div>
</template>

<script>
import Action from './views/Action.vue'

export default {
  name: 'App',
  components: {
    Action
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
