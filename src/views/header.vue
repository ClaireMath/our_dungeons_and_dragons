<template>
    <header>
      <h1>黑暗城堡</h1>
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
  /*background-color: grey;*/
  left: 0;
  top: 0;
  height: 70px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  z-index: 6;
  overflow: visible;
 
}

header h1 {
padding-left: 30px;
  font-family: Augusta;
}


.divNav{
  padding-right: 30px;
}
</style>
