<template>
  <div id="app">
    <div><Header/></div>
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/action">Let's play !</router-link>
    </div>-->
    
    <!-- <h1>Hello and Welcome brave knight !</h1> -->
    <!-- <Home/> -->
    <router-view />
    <div><Footer/></div>
  </div>
</template>

<script>
// import Action from './views/Action.vue'
// import NotFound from './views/NotFound.vue'
import Header from './views/header.vue';
import Footer from './views/Footer.vue';


export default {
  name: 'App',
  components: {
    Header,
    Footer
    // Action, 
    // NotFound
  }
}
</script>

<style>
html, body{
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: none;
}

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing:  border-box;
  outline: none;
}

#app {
  display: inline-block;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: gray;
  height: 100vh;
  width: 100%;
  margin: 0px;
}



#nav {
  padding: 0px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.footer {
  position: relative;
  background-color: green;
  bottom: 0;
  width: 100%;
}

.header {
  position: relative;
  background-color: green;
  left: 0;
  top: 0;
  width: 100%;
}
</style>
