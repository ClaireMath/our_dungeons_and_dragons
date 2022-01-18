<template>
  <div id="app">
    
    <div id="nav">
      
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/action">Let's play !</router-link>
      <router-link to="/header">Header</router-link>
      <router-link to="/footer">Footer</router-link>

      <div class="menu-bg"></div>
<div class="menu-burger">☰</div>
<!-- <div class="menu-items">
  <div>Accueil</div>
  <div>Règles</div>
  <div>Histoires</div>
  <div>Profil</div>
  <div>À propos</div>

</div> -->
    </div>
    <!-- <h1>Hello and Welcome brave knight !</h1> -->
    <!-- <Home/> -->
    <router-view />



    
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

<style scoped>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  display: flex;
  flex-direction: row ;
  justify-content: flex-end;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
