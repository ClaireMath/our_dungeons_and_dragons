<template>
  <div class="big_ctn">
    <!--<img class="backgroundImg" src="../assets/scrollBack.jpeg" alt="background">-->
    <div class="gameContainer">
      <div><LeftPage /></div>
      <div id="game">
        <div class="combat">
          <h1>Fight</h1>
          <div class="container">
            <div class="player">
              <h2>Player</h2>
              <h4>Points de vie: {{ lifePoints }}</h4>
              <h4>Dégat de l'arme: {{ weapon }}</h4>
              <h4>Point d'armure: {{ playerArmor }}</h4>
            </div>
            <div class="enemy">
              <h2>Enemy</h2>
              <h4>Points de vie: {{ enemyLifePoints }}</h4>
              <h4>Dégat de l'arme: {{ enemyWeapon }}</h4>
              <h4>Point d'armure: {{ enemyArmor }}</h4>
            </div>
          </div>
          <div class="log">
            <div class="allLogs">
              <p v-for="line in log" :key="line" >{{ line }}</p>
            </div>
            
          </div>
          <div class="action">
            <button @click="JoueurHitEnemy">Attaquer</button>
          </div>
        </div>
        <p class="paragraphe" v-html="MyJson.book[Id].paragraph"></p>
        
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
  components: { LeftPage, RightPage },
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
      enemyLifePoints: 0,
      weapon: 5,
      enemyWeapon: 0,
      playerArmor: 0,
      enemyArmor: 0,
      potion: "",
      log: []
    };
  },
  created: function () {
    this.Id = this.$route.query.id;
    this.enemyLifePoints = this.MyJson.book[this.Id].ennemie[0].vie
    this.enemyWeapon = this.MyJson.book[this.Id].ennemie[0].attaque
    this.enemyArmor = this.MyJson.book[this.Id].ennemie[0].defense
    // this.getFirstLifePoints();
    // this.fight("player")
    this.EnemyHitJoueur();
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
    JoueurHitEnemy() {
      this.log.push("C'est à vous d'attaquer.")
      this.enemyLifePoints = 20;
      console.log(this.enemyLifePoints);
      //A aller chercher dans le json quand il sera mis en forme

      //le joueur attaque l'ennemi
      //il lance les dés
      this.throwTheDice(2);
      //calcul du resultat

      let total = this.randomDice1 + this.randomDice2;
      this.log.push("Vous attaquez de :  " + total + " (total des dés).")
      
      if (total >= 6) {
        this.log.push("Le coup est réussi.")
        
        let damage = total - 6 + this.weapon - this.enemyArmor;
        this.log.push("Vous faites à l'ennemi :  "+ damage+ " points de dégats.")
        this.enemyLifePoints = this.enemyLifePoints - damage;
        this.log.push("il reste à l'ennemi : " + this.enemyLifePoints+" points.");
        
      }
    },

    EnemyHitJoueur() {
      this.throwTheDice(2);

      let total = this.randomDice1 + this.randomDice2;
      console.log("Total des dés : " + total);
      if (total >= 6) {
        console.log("le coup est réussi car lscore égal ou supérieur à 6");
        let damage = total - 6 + this.enemyWeapon - this.playerArmor;
        console.log("enemyweapon : " + this.enemyWeapon);
        console.log("playerarmor : " + this.playerArmor);
        console.log(
          "damage = (total des dés moins 6 + l'arme de l'ennemi - l'armure du joueur)" +
            damage
        );
        this.remainingLifePoints = this.startingLifePoints - damage;
        this.lifePoints = this.remainingLifePoints;
        console.log(
          "lifepoints restants du héro : " + this.remainingLifePoints
        );
        console.log("lifepoints : " + this.lifePoints);
      }
    },
    fight(whoStart) {
      if (whoStart == "player") {
        while (this.enemyLifePoints > 5 || this.lifePoints > 0) {
          this.JoueurHitEnemy();
          if (this.enemyLifePoints <= 5) {
            console.log("l'ennemi est assommé");
          } else {
            this.EnemyHitJoueur();
          }
        }
      } else {
        while (this.enemyLifePoints > 5 || this.lifePoints > 0) {
          this.EnemyHitJoueur();
          if (this.lifePoints <= 0) {
            console.log("l'ennemi est assommé");
          } else {
            this.JoueurHitEnemy();
          }
        }
      }
    },
  },
};
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

.paragraphe {
  height: 100vh;
  overflow: auto;
  position: relative;
  
}
.combat {
  width: 500px;
  height: 600px;
  background-color: blue;
  position: absolute;
  z-index: 10;
}
#game
{
  display: flex;
  justify-content: center;
}
.container{
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: row;
  background-color: yellow;

}

.player{
  width: 50%;
  background-color: green;
}

.enemy{
  width: 50%;
  background-color: purple;
}
.log
{
  width: 100%;
  height: 100px;
  background-color: pink;
}
.action
{
  width: 100%;
  height: 100px;
  background-color: fuchsia;
}
.allLogs{
  width: 100%;
  height:100px;
  overflow: scroll;
}

</style>
<img class="backgroundImg" src="../assets/scrollBack.jpeg" alt="background">