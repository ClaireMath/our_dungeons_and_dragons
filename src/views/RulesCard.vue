<template>
    <ul class="cards">
  <li>
    <a href="/BasicRules.vue" class="card">
      <img src="../assets/Epee.png" class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
                        
          <div class="card__header-text">
            <h3 class="card__title">Les bases</h3>            
            
          </div>
        </div>
        <p class="card__description">Maitrisez les bases comme personne..</p>
      </div>
    </a>      
  </li>
  <li>
    <a href="/Life.vue" class="card">
      <img src="../assets/Coeur.png" class="card__image" alt="" />
      <div class="card__overlay">        
        <div class="card__header">
          <div class="card__header-text">
            <h3 class="card__title">Points de vies</h3>
            
          </div>
        </div>
        <p class="card__description">Survivez à vos adversaires</p>
      </div>
    </a>
  </li>
  <li>
    <a href="/Magic.vue" class="card">
      <img src="../assets/Baguette.png" class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <div class="card__header-text">
            <h3 class="card__title">Sortilèges</h3>
            
          </div>
        </div>
        <p class="card__description">Abracadabra !</p>
      </div>
    </a>
  </li>
   
</ul>
</template>


<script>
// import BasicRules from "./BasicRules.vue"

// export default {
//   name: 'Rules',
//   components: {
//     BasicRules,
    
   
//   }
// }

</script>



<style scoped>



* {
  box-sizing: border-box;
}

body {
  font-family: "Noto Sans JP", sans-serif;
  background-color: #fef8f8;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 4rem 5vw;
  padding: 0;
  list-style-type: none;
  position: relative;
  left: 5%;
  
}

.card {
  position: relative;
  display: block;
  width: 260px;
  height: 320px;
  overflow: hidden;
  text-decoration: none;
  border: 0.1em solid;
  border-radius: 10%;
  border-color: rgb(216, 216, 216);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

}

.card__image {
  width: 90%;
  height: auto;
}

.card__overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  transform: translateY(100%);
  transition: 0.2s ease-in-out;
}

.card:hover .card__overlay {
  transform: translateY(0);
}

.card__header {
  position: relative;
  display: flex;
  align-items: center;
  gap: 2em;
  padding: 2em;
  border-radius: calc(var(--curve) * 1px) 0 0 0;
  background-color: var(--surface-color);
  transform: translateY(-100%);
  transition: 0.2s ease-in-out;
}


.card:hover .card__header {
  transform: translateY(0);
}

.card__thumb {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  border-radius: 100%;
}

.card__title {
  font-size: 1em;
  margin: 0 0 0.3em;
  color: black;
}

.card__tagline {
  display: block;
  margin: 1em 0;
  font-family: "MockFlowFont";
  font-size: 0.8em;
  color: black;
}

.card__status {
  font-size: 0.8em;
  color: black;
}

.card__description {
  padding: 0 2em 2em;
  margin: 0;
  color: black;
  background-color: rgb(255, 227, 191);
  opacity: 50%;
  font-family: "MockFlowFont";
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}



</style>