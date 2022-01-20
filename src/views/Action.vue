<template>
  <div class="big_ctn">
    <!--<img class="backgroundImg" src="../assets/scrollBack.jpeg" alt="background">-->
    <div class="gameContainer">
      
      <div><LeftPage /></div>
      <div>
      <p class="paragraphe" v-html="MyJson.book[Id].paragraph"></p>
<!--
      <div>
        
        <h1>Hi and welcome, brave Knight !<br /></h1>
        <h3>Take action against this dragon</h3>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
          natus totam optio facere suscipit sapiente corrupti magnam saepe eaque
          repellendus eligendi distinctio dolor, hic harum voluptas, ad quos
          sequi delectus.PROUT
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
          deserunt asperiores officia nihil? Non eos odit quo consequatur
          veritatis, natus neque voluptatum sint doloribus fugit dolorem ut
          earum accusantium autem.
        </p>

        <div class="btnCtn">
          <input
            v-if="btn1"
            @click="getNextParagraphLeft"
            type="button"
            class="btn"
            value="Gauche"
          />
          <input
            v-if="btn1"
            @click="getNextParagraphRight"
            type="button"
            class="btn"
            value="Droite"
          />
        </div>

        <div v-if="left">
          <p>ce paragraphe s'affiche si je clique sur GAUCHE</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            voluptas fugit neque aut iste, dolore cumque iusto! Explicabo
            reiciendis quidem vero voluptatem temporibus iure debitis aliquam,
            placeat velit hic magnam!
          </p>
          <div class="btnCtn">
            <input
              v-if="btn2"
              @click="getParagraph2Left"
              type="button"
              class="btn"
              value="Gauche"
            />
            <input
              v-if="btn2"
              @click="getParagraph2Right"
              type="button"
              class="btn"
              value="Droite"
            />
          </div>
        </div>
        <div v-if="right">
          <p>ce paragraphe s'affiche si je clique sur DROITE</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            voluptas fugit neque aut iste, dolore cumque iusto! Explicabo
            reiciendis quidem vero voluptatem temporibus iure debitis aliquam,
            placeat velit hic magnam!
          </p>
          <div class="btnCtn">
            <input
              v-if="btn2"
              @click="getParagraph2Left"
              type="button"
              class="btn"
              value="Gauche"
            />
            <input
              v-if="btn2"
              @click="getParagraph2Right"
              type="button"
              class="btn"
              value="Droite"
            />
          </div>
        </div>
      </div>-->
      </div>
      <div><RightPage /></div>
    </div>
  </div>
</template>

<script>
import LeftPage from "./LeftPage.vue";
//import toggleLeft from "./LeftPage.vue";
import RightPage from "./RightPage.vue";
import json from "../assets/data.json";

export default {
  components: {LeftPage, RightPage},
  name: "Action",
  props: {},
  data() {
    return {
      Id: null,
      MyJson: json,
      randomDice1: null,
      randomDice2: null,
      startingLifePoints: 20,
      lifePoints: 0,
      remainingLifePoints: 0,
      enemyLifePoints: {},
      weapon: 5,
      enemyWeapon: 0,
      playerArmor: 0,
      enemyArmor: 0,
      potion: "",
    };
  },
  created: function () {
    this.Id = this.$route.query.id;
    // this.getFirstLifePoints();
    // this.fight("player")
    this.EnemyHitJoueur()
  },

  methods: {
    goTo(nextid) {
      this.$router.push("?id=" + nextid);
      window.location.reload();
    },

    throwTheDice(nbOfDice) {
      if (nbOfDice == 1) {
        this.randomDice1 = Math.floor(6 * Math.random()) + 1;
      } else {
        this.randomDice1 = Math.floor(6 * Math.random()) + 1;
        this.randomDice2 = Math.floor(6 * Math.random()) + 1;
      }
    },
    getFirstLifePoints() {
      this.throwTheDice(2);
      
      this.startingLifePoints = (this.randomDice1 + this.randomDice2) * 4;
      
    },
    JoueurHitEnemy(){
        this.enemyLifePoints = 20;   
        console.log(this.enemyLifePoints)
                 //A aller chercher dans le json quand il sera mis en forme

        //le joueur attaque l'ennemi
        //il lance les dés
        this.throwTheDice(2);
        //calcul du resultat
        
        let total = this.randomDice1 + this.randomDice2;
        console.log("Vous attaquez de:  "+total + "total des dés")
        if(total >= 6){
            console.log("le coup est reussi")
            let damage = (total-6)+this.weapon -this.enemyArmor 
            this.enemyLifePoints = this.enemyLifePoints - damage
            console.log("il reste à l'ennemi :" + this.enemyLifePoints)
        }
    },
    
    EnemyHitJoueur(){
        
        this.throwTheDice(2);
        
        let total = this.randomDice1 + this.randomDice2;
        console.log("total des dés : " +total);
        if(total >= 6){
            console.log("le coup est reussi car score égal ou supérieur à 6")
            let damage = (total-6)+this.enemyWeapon - this.playerArmor
            console.log("enemyweapon : " + this.enemyWeapon);
            console.log("playerarmor : " + this.playerArmor);
            console.log("damage = (total des dés moins 6 + l'arme de l'ennemi - l'armure du joueur)" + damage);
            this.remainingLifePoints = this.startingLifePoints - damage
            this.lifePoints = this.remainingLifePoints
            console.log("lifepoints restants du héro : " + this.remainingLifePoints);
            console.log("lifepoints : " + this.lifePoints);
        }

  },
  fight(whoStart){

      if(whoStart == "player"){
        while(this.enemyLifePoints >5 || this.lifePoints >0){
            this.JoueurHitEnemy()
            if(this.enemyLifePoints <=5){
                console.log("l'ennemi est assommé")
            }else{
                this.EnemyHitJoueur()
            }
        }
        }else{
           while(this.enemyLifePoints >5 || this.lifePoints >0){
            this.EnemyHitJoueur()
            if(this.lifePoints <=0){
                console.log("l'ennemi est assommé")
            }else{
                
                this.JoueurHitEnemy()
            }
        } 
      }
  }
}
}
</script>

<style scoped>
html,
body {
  height: 100%;
  width: 100%;
}

h3 {
  margin: 40px 0 0;
}
.big_ctn {
  width: 100%;
  height: 91%;
  padding-top: 9%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/scrollBack.jpeg");
  position: relative;
  z-index: 1;
  
}
.gameContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.backgroundImg {
  position: relative;
  z-index: -2;
  opacity: 50%;
  object-fit: cover;
}



</style>
<img class="backgroundImg" src="../assets/scrollBack.jpeg" alt="background">