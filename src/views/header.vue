<template>
    <header>
      <h1>Il castillo de las Noches</h1>
      <div class="divNav">
      <router-link to="/">| Accueil |</router-link>
      <router-link to="/Rules"> Règles |</router-link>
      <router-link to="/Action/?id=0"> Jouer |</router-link>
      <router-link to="/About"> À propos |</router-link>
    </div>
    </header>

</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
@font-face {
 font-family: "Augusta";
 src: url("../assets/augusta/Augusta.ttf");
}

header {
  position: relative;
  background-color: grey;
  left: 0;
  top: 0;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition-property: height;
  transition-duration: 500ms;
  z-index: 6;
  overflow: visible;
 
}

header h1 {
padding-left: 30px;
  font-family: Augusta;
  color: #2c3e5000;
  transition-property: color;
  transition-duration: 500ms;
}

header:hover {
  height: 120px;
}

header:hover h1 {
  color: #2c3e50;
}
.divNav{
  padding-right: 30px;
}
</style>
