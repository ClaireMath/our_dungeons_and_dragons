<template>
  <div class="bigCtn">
    <div class="topDiv">
      <div class="firstElofTopDiv">
        <button @click="getFirstLifePoints()" class="btn startBtn">
          Commencer le jeu !
        </button>
        <p v-if="startingLifePoints" class="startingLifePoints">
          Vous partez avec {{ startingLifePoints }} points de vie.
        </p>
      </div>
     
        <div class="dicePackage">
          <div v-if="diceResult" class="diceResult">
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

            <div class="div_du_Gif1">
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

          <div class="diceThrow">
            <img
              @click="throwTheDice(1)"
              src="../assets/dice/dice3D.png"
              alt="dé en3D"
              class="dice3D"
            />
            <div class="dice3Dx2" @click="throwTheDice(2)">
              <img
                src="../assets/dice/black3Ddice.png"
                alt="dé en3D"
                class="dice3D"
              />
              <img
                src="../assets/dice/dice3D.png"
                alt="dé en3D"
                class="dice3D"
              />
           
          </div>
          <!--   <p v-if="randomDice1">{{ randomDice1 }}</p>
      <p v-if="randomDice2">{{ randomDice2 }}</p>-->
        </div>
      </div>
    </div>
    <p class="paragraphe" v-html="MyJson.book[Id].paragraph"></p>

    <div class="divOfChoicesBtn"
      v-for="choices in MyJson['book'][Id]['choices']"
      :key="choices['text']"
    >
      <input
        @click="goTo(choices['id'])"
        type="button"
        class="btn btnChoices"
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
      diceResult: null,
      randomDice1: null,
      randomDice2: null,
      startingLifePoints: 0,
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
        this.diceResult = true;
        this.diceThrow = false;
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
  background-image: url("../assets/scrollBack.jpeg");
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: justify;
  padding-bottom: 200px;
  
}
.topDiv {
  margin-left: 10%;
  margin-right: 10%;
  width: 80%;
  height: 160px;
  display: flex;
  align-items: center;
  /*background-color: blue;*/
  justify-content: space-between;
}
.firstElofTopDiv {
  width: 600px;
  height: 160px;
  /*background-color: yellow;*/
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.dicePackage {
  width: 200px;
  height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  /*background-color: yellowgreen;*/
}
.diceResult {
  width: 150px;
  height: 120px;
  border-radius: 13px;
  /*background-color: grey;*/
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

/*.div_du_Gif1 {
background-color: coral;
}*/

#img1 {
  width: 100px;
  height: 100px;
  border-radius: 20px;
}
#img2 {
  width: 60px;
  height: 60px;
}
.whiteBox {
  border-radius: 13px;
  /* background-color: gainsboro;*/
  width: 60px;
  height: 60px;
}
.paragraphe {
  margin-left: 10%;
  margin-right: 10%;
  max-height: 50vh;
  overflow: auto;
  text-align: justify;
}
.diceThrow {
  width: 200px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
/*background-color: fuchsia;*/
}
.dice3D {
  width: 40px;
  height: 40px;
}
.startBtn {
  width: 200px;
  height: 50px;
}

  .btn {
  /*margin: 30px;*/
  box-shadow: inset 0px 1px 0px 0px #a6827e;
  background: linear-gradient(to bottom, #7d5d3b 5%, #634b30 100%);
  background-color: #7d5d3b;
  border-radius: 10px;
  border: 2px solid goldenrod;
  display: inline-block;
  cursor: pointer;
  color: goldenrod;
  font-size: 17px;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #4d3534;
}
.btn:hover {
  background: linear-gradient(to bottom, #634b30 5%, #7d5d3b 100%);
  background-color: #634b30;
  border: 3px solid goldenrod;
}
.btn:active {
  position: relative;
  top: 1px;
  border: 3px solid goldenrod;
}
.divOfChoicesBtn {
  width: 80%;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 200px;
  /*background-color: aqua;*/
}


</style>
