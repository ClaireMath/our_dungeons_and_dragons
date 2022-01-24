<template>
  <div class="big_ctn">
    <!--<img class="backgroundImg" src="../assets/scrollBack.jpeg" alt="background">-->
    <!-- <div class="gameContainer"> -->
    <div><LeftPage /></div>
    <div class="superDiv">
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
          <div class="diceHidden">
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
      <div id="game">
        <p class="paragraphe" v-html="MyJson.book[Id].paragraph"></p>

        <!-- <div class="combat">
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
              <p v-for="line in log" :key="line">{{ line }}</p>
            </div>
          </div>
          <div class="action">
            <button @click="JoueurHitEnemy">Attaquer</button>
          </div>
        </div> -->
        <div class="divOfChoicesBtn">
          <div
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
      </div>
    </div>
  </div>
</template>

<script>
import LeftPage from "./LeftPage.vue";
//import toggleLeft from "./LeftPage.vue";
//import RightPage from "./RightPage.vue";
import json from "../assets/data.json";

export default {
  components: { LeftPage },
  name: "Action",
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
      startingLifePoints: 20,
      lifePoints: 0,
      remainingLifePoints: 0,
      enemyLifePoints: 0,
      weapon: 5,
      enemyWeapon: 0,
      playerArmor: 0,
      enemyArmor: 0,
      potion: "",
      log: [],
    };
  },
  created: function () {
    this.Id = this.$route.query.id;
    this.enemyLifePoints = this.MyJson.book[this.Id].ennemie[0].vie;
    this.enemyWeapon = this.MyJson.book[this.Id].ennemie[0].attaque;
    this.enemyArmor = this.MyJson.book[this.Id].ennemie[0].defense;
    // this.getFirstLifePoints();
    // this.fight("player")
    this.EnemyHitJoueur();
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

    throwTheDice(nbOfDice) {
      if (nbOfDice == 1) {
        this.playSound();

        this.diceResult = true;
        this.diceThrow = false;
        this.dice1 = false;
        this.dice2 = false;
        this.gif1 = true;
        this.gif2 = false;
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

    getFirstLifePoints() {
      this.gif1 = true;
      this.gif2 = true;
      console.log("getFirstLifePoints : gif1 :" + this.gif1);
      console.log("getFirstLifePoints :  dé :" + this.dice1);
      this.throwTheDice(2);
      this.startingLifePoints = (this.randomDice1 + this.randomDice2) * 4;
    },
    JoueurHitEnemy() {
      this.log.push("C'est à vous d'attaquer.");
      this.enemyLifePoints = 20;
      console.log(this.enemyLifePoints);
      //A aller chercher dans le json quand il sera mis en forme

      //le joueur attaque l'ennemi
      //il lance les dés
      this.throwTheDice(2);
      //calcul du resultat

      let total = this.randomDice1 + this.randomDice2;
      this.log.push("Vous attaquez de :  " + total + " (total des dés).");

      if (total >= 6) {
        this.log.push("Le coup est réussi.");

        let damage = total - 6 + this.weapon - this.enemyArmor;
        this.log.push(
          "Vous faites à l'ennemi :  " + damage + " points de dégats."
        );
        this.enemyLifePoints = this.enemyLifePoints - damage;
        this.log.push(
          "il reste à l'ennemi : " + this.enemyLifePoints + " points."
        );
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
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing:  border-box;
  outline: none;
}

@font-face {
  font-family: "Irish";
  src: url("../assets/IrishUncialfabeta-Bold.ttf");
}
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
  display: flex;
  background-color: #634b30;

  justify-content: center;
  align-items: flex-start;
  background-image: linear-gradient(
      rgba(227, 202, 171, 0.7),
      rgba(227, 202, 171, 0.7)
    ),
    url("../assets/Bat.png"), url("../assets/scrollBack.jpeg");
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  z-index: 1;
}
.superDiv {
  display: flex;
  flex-direction: column;
  background-color: aquamarine;
}
.topDiv {
  /*width: 80%;*/
  position: relative;
  height: 50px;
  display: flex;
  align-items: flex-end;
  background-color: blue;
  justify-content: space-between;
  margin-bottom: 20px;
  transition-duration: 500ms;
  z-index: 8;
}

.topDiv:hover {
  height: 160px;
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

.diceHidden {
  height: 180px;
}
.diceResult {
  width: 150px;
  min-height: 120px;
  border-radius: 13px;
  /*background-color: grey;*/
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
/*#paragraphCtn {
  background-color: linear-gradient(
    rgba(227, 202, 171, 0.5),
    rgba(227, 202, 171, 0.5)
  );
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 2;
  width: 50%;
}*/
.gameContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.backgroundImg {
  position: relative;
  z-index: -2;
  object-fit: cover;
}
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
  height: 60vh;
  overflow: auto;
  text-align: justify;
}

p {
  font-family: Irish;
  padding: 10px;
}
.diceThrow {
  width: 200px;
  height: 60px;
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
  cursor: pointer;
  /*background-color: fuchsia;*/
}
.dice3D {
  width: 40px;
  height: 40px;
}
.startBtn {
  margin-left: 20px;
  width: 210px;
  height: 40px;
}

/*.combat {
  width: 500px;
  height: 600px;
  background-color: blue;
  position: absolute;
  z-index: 10;
}*/
#game {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
/*.container {
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: row;
  background-color: yellow;
}

.player {
  width: 50%;
  background-color: green;
}

.enemy {
  width: 50%;
  background-color: purple;
}
.log {
  width: 100%;
  height: 100px;
  background-color: pink;
}
.action {
  width: 100%;
  height: 100px;
  background-color: fuchsia;
}
.allLogs {
  width: 100%;
  height: 100px;
  overflow: scroll;
}*/
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
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  /*background-color: aqua;*/
}
.btnChoices {
  margin-bottom: 20px;
}
</style>
