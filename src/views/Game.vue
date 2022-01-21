<template>
  <div class="bigCtn">
    <!-- <input
      @click="throwTheDice()"
      type="button"
      class="btn"
      v-model="Jettez les dés"
    /> -->
    <p>Vous partez avec {{ startingLifePoints }} points de vie.</p>
    <br />
    <div class="main">
      <!-- <img v-bind:src="'../assets/dice/' + randomDice1 + '.png'"/> -->
      <!-- <img :src="require('../assets/dice/' + randomDice1 + '.png')" id="img1"/>
 <img :src="require('../assets/dice/' + randomDice2 + '.png')" id="img2"/> -->
      <div>
        <div class="div_du_Gif1">
          <img
            v-if="gif1"
            src="../assets/dice/dice.gif"
            alt="dé gif1"
            id="img1"
          />
          <div v-if="dice1" class="whiteBox">
            <img
              :src="require('../assets/dice/' + randomDice1 + '.png')"
              id="img2"
            />
          </div>
        </div>

        <div class="div_du_Gif2">
          <img
            v-if="gif2"
            src="../assets/dice/dice.gif"
            alt="dé gif2"
            id="img1"
          />
          <div v-if="dice2" class="whiteBox">
            <img
              :src="require('../assets/dice/' + randomDice2 + '.png')"
              id="img2"
            />
          </div>
        </div>
      </div>

      <br />
      <br />
      <button @click="throwTheDice(1)">Jettez un dé</button>
      <button @click="throwTheDice(2)">Jettez 2 dés</button>

      <p v-if="randomDice1">{{ randomDice1 }}</p>
      <p v-if="randomDice2">{{ randomDice2 }}</p>
    </div>

    <p class="paragraphe" v-html="MyJson.book[Id].paragraph"></p>

    <div
      v-for="choices in MyJson['book'][Id]['choices']"
      :key="choices['text']"
    >
      <input
        @click="goTo(choices['id'])"
        type="button"
        class="btn"
        v-model="choices['text']"
      />
    </div>
  </div>
</template>

<script>
import json from "../assets/data.json";

export default {
  name: "Game",
  props: {},
  data() {
    return {
      Id: null,
      MyJson: json,
      gif1: false,
      gif2: false,
      dice1: false,
      dice2: false,
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
    this.getFirstLifePoints();
    // this.fight("player")
    //  this.EnemyHitJoueur();
  },

  methods: {
    goTo(nextid) {
      this.$router.push("?id=" + nextid);
      window.location.reload();
    },

    playSound() {
      var audio = new Audio(
        "http://soundbible.com/mp3/Shake And Roll Dice-SoundBible.com-591494296.mp3"
      );
      audio.play();
    },

    getFirstLifePoints() {
      this.gif1 = true;
      this.gif2 = true;
      console.log("getFirstLifePoints : gif1 :" + this.gif1);
      console.log("getFirstLifePoints :  dé :" + this.dice1);
      this.throwTheDice(2);
      this.startingLifePoints = (this.randomDice1 + this.randomDice2) * 4;
    },

    diceAnim(nbOfDice) {
      console.log("cest diceanim ici !");
      if (nbOfDice == 1) {
        this.gif1 = false;
        this.dice1 = true;
        console.log("diceAnim : gif1 :" + this.gif1);
        console.log("diceAnim : dé :" + this.dice1);
      } else {
        this.gif1 = false;
        this.gif2 = false;
        this.dice1 = true;
        this.dice2 = true;
        console.log("diceAnim else car 2 dés : gif1 :" + this.gif1);
        console.log("diceAnim else car 2 dés : dé : " + this.dice1);
      }
    },

    throwTheDice(nbOfDice) {
      if (nbOfDice == 1) {
        this.playSound();
        this.gif2 = false;
        this.dice1 = false;
        this.dice2 = false;
        this.gif1 = true;
        console.log("tets");
        console.log("if throwthedice : gif1 :" + this.gif1);
        console.log("if throwthedice : dé :" + this.dice1);
        this.randomDice1 = Math.floor(6 * Math.random()) + 1;
        setTimeout(this.diceAnim, 2000, 1);
      } else {
        this.playSound();
        // this.gif1 = true;
        this.dice1 = false;
        this.dice2 = false;
        this.gif1 = true;
        this.gif2 = true;
        console.log("else throwthedice : gif1 :" + this.gif1);
        console.log("else throwthedice : dé :" + this.dice1);
        // this.dice1 = true;
        this.randomDice1 = Math.floor(6 * Math.random()) + 1;
        this.randomDice2 = Math.floor(6 * Math.random()) + 1;

        // attention dans le settimeout, le paramètre de notre fonction diceAnim
        // se place après le temps en milisecondes, aussi curieux que cela puisse paraitre
        setTimeout(this.diceAnim, 1500, 2);
      }
    },

    // moveTheDice() {
    //   const img1 = document.getElementById("img1");
    //   console.log(img1);
    // },

    JoueurHitEnemy() {
      this.enemyLifePoints = 20;
      console.log(this.enemyLifePoints);
      //A aller chercher dans le json quand il sera mis en forme

      //le joueur attaque l'ennemi
      //il lance les dés
      this.throwTheDice(2);
      //calcul du resultat

      let total = this.randomDice1 + this.randomDice2;
      console.log("Vous attaquez de:  " + total + "total des dés");
      if (total >= 6) {
        console.log("le coup est reussi");
        let damage = total - 6 + this.weapon - this.enemyArmor;
        this.enemyLifePoints = this.enemyLifePoints - damage;
        console.log("il reste à l'ennemi :" + this.enemyLifePoints);
      }
    },

    EnemyHitJoueur() {
      this.throwTheDice(2);

      let total = this.randomDice1 + this.randomDice2;
      console.log("total des dés : " + total);
      if (total >= 6) {
        console.log("le coup est reussi car score égal ou supérieur à 6");
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
* {
  margin: 0;
  padding: 0;
}

h3 {
  margin: 40px 0 0;
}

.bigCtn {
  background-color: pink;
  width: 100%;
  padding: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: justify;
}
.main {
  width: 300px;
  height: 160px;
  border-radius: 13px;
  background-color: black;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

#img1 {
  width: 150px;
  height: 150px;
}
#img2 {
  width: 80px;
  height: 80px;
}
.whiteBox {
  border-radius: 13px;
  background-color: gainsboro;
  width: 80px;
  height: 80px;
}
.paragraphe {
  height: 100vh;
  overflow: auto;
}
</style>
