<template>
  <div class="about">
  <div class="boxabout">
    <img src="../assets/About.jpg" alt="about">
    <div class="boxtext">
    <h1>{{message}}</h1>
    <div class="spanbox">
    <span>C'est sans doute que vous voulez savoir ce que l'on fait et pourquoi on le fait.<br></span>
      <span> QUEST STORIES c'est avant tout un site pour les passionés de lectures mais également les passionés de jeux.
      Nous avons voulu remasterisé les LIVRES DONT VOUS ÊTES LE HÉROS en version interactive pour encore plus de plaisir pour le lecteur.<br></span>

     <span> Notre mission ? QUE TOUS LE MONDE S'AMUSE !<br></span>

     <span> Envie de partager avec nous ?
      Retrouvez nous sur les réseaux sociaux.
    </span></div>
    <img src="../assets/Fb.png" alt="fb" class="rs">
    <img src="../assets/Insta.png" alt="fb" class="rs">
    </div>
    </div>
  </div>
</template>


<style scoped>


body{
  
  color: black;
  
}

.boxabout{
display: flex;
flex-direction: row;
justify-content: space-around;
height: 100%;
width: 100%;


}

.boxtext {
  display: flex;
  flex-direction: column;
  display: block;
   width: 50%;
  height: 50%;
  text-align: justify;
}

img {

width: 30%;
border-radius: 10%;
}


.spanbox{
  display: block;
  height: 50%;
  line-height: 50px;
  
}


.rs {
  height: 10%;
  width: 20%;
}

</style>