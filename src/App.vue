<template>
  <div id="app">

    <div><Header/></div>


    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/action">Let's play !</router-link>
    </div>-->

    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/action">Let's play !</router-link> |
      <router-link to="/game/?id=0">Game</router-link>
    </div> -->


    <!-- <h1>Hello and Welcome brave knight !</h1> -->
    <!-- <Home/> -->

    <div><Navbar/></div>
    
    
    <router-view />
    <div><Footer/></div>
  </div>


</template>

<script>
import Navbar from './views/Navbar.vue'
// import Action from './views/Action.vue'
// import NotFound from './views/NotFound.vue'
import Header from './views/header.vue';
import Footer from './views/Footer.vue';


export default {
  name: 'App',
  components: {
    Navbar, Header, Footer
    
   
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
  background-image: url("/public/img/scrollBack.jpeg");
}

#app {
  display: inline-block;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;

  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  /* background-color: gray; */

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

  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-property: height;
  transition-duration: 500ms;
  transition-property: bottom;
  transition-duration: 500ms;
}

.footer h1 {
  color: #2c3e5000; 
  transition-property: color;
  transition-duration: 500ms;
}

.footer:hover {
  height: 120px;
  bottom: 80px;
} 

.footer:hover h1 {
  color: #2c3e50;

  width: 100%;

}

.header {
  position: relative;
  background-color: green;
  left: 0;
  top: 0;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-property: height;
  transition-duration: 500ms;
  
  
}

.header h1 {
  color: #2c3e5000; 
  transition-property: color;
  transition-duration: 500ms;
}

.header:hover {
  height: 120px;
} 

.header:hover h1 {
  color: #2c3e50;
  width: 100%;
}
</style>
