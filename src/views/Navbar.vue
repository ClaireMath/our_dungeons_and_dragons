<template>

    <div id="nav">

<a href="/">
    <img class="logo" alt="logo" src="../assets/QuestStoriesLogo.png">

</a>

<div class="block">
<router-link to="/">| Accueil |</router-link>
<router-link to="/Rules"> Règles |</router-link>
<router-link to="/Game/?id=0"> Jouer |</router-link>
<router-link to="/Action"> Histoire |</router-link>
<router-link to="/About"> À propos |</router-link>

</div>

</div>

</template>


<script>


</script>


<style scoped>


#nav {
  padding: 30px;
  display: flex;
  flex-direction: row ;
  justify-content: space-between;
  
}

#nav a {
  font-weight: bold;
  color: black;
  text-decoration: none;

}

#nav a.router-link-exact-active {
  color: #91583d;
}

.logo {
  width: 15%;
  position: absolute;
  top: -70px;
  left: -50px;

}

.block{
  position: absolute;
  left: 73%;
}

</style>