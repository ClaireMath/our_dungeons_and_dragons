<template>
  <div id="app">

    <Header/>  
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
    Header, Footer,
    
    
      
   
  }
}


</script>

<style scoped>
html, body{
  height: 100vh;
  max-width: 100%;
  overflow: hidden;
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
  overflow: hidden;
  background-image: url("/public/img/scrollBack.jpeg");
}

#fs-toggle:not(:fullscreen) {
  background-color: #afa;
}

#fs-toggle:fullscreen {
  background-color: #faa;
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

  /*height: 100vh;*/
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
