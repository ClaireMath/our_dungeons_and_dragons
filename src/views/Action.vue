<template>
  <div class="big_ctn">
    <div>
      <LeftPage
        @openParam="openMenu"
        :lifePoints="lifePoints"
        :startingLifePoints="startingLifePoints"
      />
    </div>
    <div class="superDiv">
      <div class="topDiv">
        <div class="firstElofTopDiv">
          <button
            @click="getFirstLifePoints()"
            class="btn startBtn"
            id="startBtn"
          >
            Commencer le jeu !
          </button>

          <p v-if="startingLifePoints" class="startingLifePoints">
            Vous partez avec {{ startingLifePoints }} points de vie.
          </p>
        </div>
        <!--<div><image-Display /><img :src="require('../assets/' + img)"/></div>-->
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
        <div id="scrollable">
          <h2 class="pTitle" v-html="MyJson.book[Id].pTitle"></h2>
          <p class="paragraphe" id="paragraphe" v-html="MyJson.book[Id].paragraph"></p>
          <img :src="require('../assets/' + MyJson.book[Id].img)" />
          <div class="divOfChoicesBtn">
            <div id="movementButton">
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

            <button
              class="btn btnChoices"
              id="displayFight"
              @click="displayFightDiv"
            >
              Combat
            </button>
          </div>
        </div>
        <Param @changePolice="changePolice" ref="param" />
        <Inventaire :vie="lifePoints" 
                    :argent="money" 
                    :maxVie="startingLifePoints" 
                    ref="inventaire" 
                    @drinkPotion="drinkPotion"
                    />
        <div class="combat" id="combat">
          <h1>Combat</h1>
          <div @click="closeWindow" class="close-container">
            <div class="leftright"></div>
            <div class="rightleft"></div>
          </div>
          <div class="container">
            <div class="player">
              <h2>Pip</h2>
              <h4>Points de vie: {{ lifePoints }}</h4>
              <h4>Dégats de l'arme: {{ weapon }}</h4>
              <h4>Points d'armure: {{ playerArmor }}</h4>
            </div>
            <div class="enemy">
              <h2>{{ name }}</h2>
              <h4>Points de vie: {{ enemyLifePoints }}</h4>
              <h4>Dégats de l'arme: {{ enemyWeapon }}</h4>
              <h4>Points d'armure: {{ enemyArmor }}</h4>
            </div>
          </div>
          <div class="fightDice">
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

          <div class="log">
            <div class="allLogs" id="logs">
              <p>{{ this.log }}</p>
            </div>
          </div>
          <div class="action">
            <button @click="JoueurHitEnemy" class="btn btnAttack">
              Attaquez {{ name }}
            </button>
            <button @click="EnemyHitJoueur" class="btn btnAttack">
              {{ name }} vous attaque
            </button>
            <button @click="fight()" class="btn startFightBtn">
              Commencer la bagarre
            </button>
            <div id="divSorts">
              <button @click="FingerAttack" class="btn fireFingerBtn">
                Doigts de feu I ({{ remainingFireFingers1 }}/5)
              </button>
              <button @click="FingerAttack2" class="btn fireFingerBtn">
                Doigts de feu II ({{ remainingFireFingers2 }}/5)
              </button>

              <button @click="FireBallAttack1" class="btn fireBallBtn">
                Boule de feu I
              </button>
              <button @click="FireBallAttack2" class="btn fireBallBtn">
                Boule de feu II
              </button>
            </div>
            <!-- <button class="btn">Doigt de feu I</button> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftPage from "./LeftPage.vue";
import json from "../assets/data.json";

import Param from "./param.vue";
import Inventaire from "./Inventaire.vue";

export default {
  components: { LeftPage, Param, Inventaire },
  name: "Action",
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
      enemyLifePoints: 0,
      fireFingerDamagePoints: 10,
      spellDamagePoints: 75,
      weapon: 5,
      enemyWeapon: 0,
      playerArmor: 0,
      enemyArmor: 0,
      toHitEnemy: 0,
      toHitPlayer: 0,
      counterFinger1: 0,
      counterFinger2: 0,
      potion: "",
      log: "",
      img: "",
      remainingFireFingers1: 5,
      remainingFireFingers2: 5,
      playerInitiative: 0,
      playerStarts: null,
      money: 5
    };
  },
  created: function () {
    this.Id = this.$route.query.id;
    this.name = this.MyJson.book[this.Id].enemy[0].name;
    this.enemyLifePoints = this.MyJson.book[this.Id].enemy[0].enemyLifePoints;
    this.enemyWeapon = this.MyJson.book[this.Id].enemy[0].enemyAttack;
    this.enemyArmor = this.MyJson.book[this.Id].enemy[0].enemyArmor;
    this.playerInitiative = this.MyJson.book[this.Id].enemy[0].playerInitiative;
    this.toHitEnemy = this.MyJson.book[this.Id].enemy[0].toHitEnemy;
    this.toHitPlayer = this.MyJson.book[this.Id].enemy[0].toHitPlayer;
    this.enemyAttack = this.MyJson.book[this.Id].enemy[0].enemyAttack;

    if (this.MyJson.book[this.Id].enemy[0].playerWeapon) {
      this.weapon = 5;
    } else {
      this.weapon = 0;
    }

    if (this.MyJson.book[this.Id].enemy[0].playerArmor) {
      this.playerArmor = 3;
    } else {
      this.playerArmor = 0;
    }
  },
  mounted() {
    
    this.getLocalStorageInfo();
    this.verifCombat();
    this.displaySorts();
    
     if (localStorage.startingLifePoints) {
      this.startingLifePoints = localStorage.startingLifePoints;
    }
    if (localStorage.lifePoints) {
      this.lifePoints = localStorage.lifePoints;
    }
  },
watch: {
    lifePoints(lifePoints) {
      localStorage.pv = lifePoints;
    },
    startingLifePoints(startingLifePoints) {
      localStorage.maxPv = startingLifePoints;
    },
    
  },
  methods: {
    changePolice(police){
        
        let paragraphe = document.getElementById("paragraphe");
        console.log(police.message)
        paragraphe.style.fontFamily = police.message;
        localStorage.police = police.message;
    },
    getLocalStorageInfo(){
      if(localStorage.pv  === undefined){
        
      }else{
        this.startingLifePoints = localStorage.maxPv;
        this.lifePoints = localStorage.pv;
      }
      
      if(localStorage.police  === undefined){
        localStorage.police = "Irish";
      }else{
        console.log("JE SUIS ICI");
        document.getElementById("paragraphe").style.fontFamily = localStorage.police;
      }
    },
    displaySorts() {
      let sorts = document.getElementById("divSorts");

      if (this.$route.query.id == 159) {
        sorts.style.display = "none";
      } else {
        sorts.style.display = "block";
      }
    },
    FingerAttack() {
      let fireFingerBtn1 = document.getElementsByClassName("fireFingerBtn");
      this.enemyLifePoints = this.enemyLifePoints - this.fireFingerDamagePoints;
      this.counterFinger1 += 1;
      this.remainingFireFingers1 -= 1;
      if (this.counterFinger1 >= 5) {
        fireFingerBtn1[0].style.display = "none";
      }
      if (this.enemyLifePoints <= 0) {
        this.displayMovement();
      }
    },

    FingerAttack2() {
      let fireFingerBtn2 = document.getElementsByClassName("fireFingerBtn");
      this.enemyLifePoints = this.enemyLifePoints - this.fireFingerDamagePoints;
      this.counterFinger2 += 1;
      this.remainingFireFingers2 -= 1;

      if (this.counterFinger2 >= 5) {
        fireFingerBtn2[1].style.display = "none";
      }
      if (this.enemyLifePoints <= 0) {
        this.displayMovement();
      }
    },

    FireBallAttack1() {
      let fireBallBtn = document.getElementsByClassName("fireBallBtn");
      fireBallBtn[0].style.display = "none";
      this.enemyLifePoints = this.enemyLifePoints - this.spellDamagePoints;
      if (this.enemyLifePoints <= 0) {
        this.displayMovement();
      }
    },

    FireBallAttack2() {
      let fireBallBtn = document.getElementsByClassName("fireBallBtn");
      fireBallBtn[1].style.display = "none";
      this.enemyLifePoints = this.enemyLifePoints - this.spellDamagePoints;
      if (this.enemyLifePoints <= 0) {
        this.displayMovement();
      }
    },

    openMenu(message) {
      if (message.message == "parametre") {
        this.$refs.param.open();
      } else if (message.message == "inventaire") {
        this.$refs.inventaire.open();
      }
    },
    hideMovement() {
      let elem = document.getElementById("movementButton");
      elem.style.display = "none";
    },
    displayMovement() {
      let elem = document.getElementById("movementButton");
      elem.style.display = "block";
      let elem2 = document.getElementById("displayFight");
      elem2.style.display = "none";
      let elem3 = document.getElementById("combat");
      elem3.style.display = "none";
    },
    verifCombat() {
      if (this.MyJson.book[this.Id].enemy != undefined) {
        this.hideMovement();

        // this.enemyLifePoints = this.MyJson.book[this.Id].enemy[0].enemyLifePoints;
        // this.enemyWeapon = this.MyJson.book[this.Id].enemy[0].enemyAttack;
        // this.enemyArmor = this.MyJson.book[this.Id].enemy[0].enemyArmor;
      } else {
        var elem = document.getElementById("displayFight");
        elem.style.display = "none";
      }
    },

    displayFightDiv() {
      var div = document.getElementById("combat");

      div.style.display = "block";
      this.enemyLifePoints = this.MyJson.book[this.Id].enemy[0].enemyLifePoints;
    },

    closeWindow() {
      let div = document.getElementsByClassName("combat");
      div[0].style.display = "none";
    },

    goTo(nextid) {
      //données à sauvegarder
      localStorage.pv = this.lifePoints;


      this.$router.push("?id=" + nextid);
      window.location.reload();
    },

    playSound() {
      var audio = new Audio(
        "http://soundbible.com/mp3/Shake And Roll Dice-SoundBible.com-591494296.mp3"
      );
      //audio.volume = 0;
      this.$refs.param.playSound(audio);
      //audio.play();
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

        this.randomDice1 = Math.floor(6 * Math.random()) + 1;
        this.randomDice2 = Math.floor(6 * Math.random()) + 1;

        // attention dans le settimeout, le paramètre de notre fonction diceAnim
        // se place après le temps en milisecondes, aussi curieux que cela puisse paraitre
        setTimeout(this.diceAnim, 1500, 2);
      }
    },

    diceAnim(nbOfDice) {
      if (nbOfDice == 1) {
        this.gif1 = false;
        this.dice1 = true;
      } else {
        this.gif1 = false;
        this.gif2 = false;
        this.dice1 = true;
        this.dice2 = true;
      }
    },

    getFirstLifePoints() {
      let startBtn = document.getElementById("startBtn");
      startBtn.style.display = "none";
      this.gif1 = true;
      this.gif2 = true;

      this.throwTheDice(2);
      this.lifePoints = (this.randomDice1 + this.randomDice2) * 4;
      this.startingLifePoints = this.lifePoints;
    },
    JoueurHitEnemy() {
      // this.log.push("C'est à vous d'attaquer.");
      // this.enemyLifePoints;
      // console.log(this.enemyLifePoints);
      //A aller chercher dans le json quand il sera mis en forme
      let btnAttack = document.getElementsByClassName("btnAttack");
      btnAttack[0].style.display = "none";
      btnAttack[1].style.display = "block";
      //le joueur attaque l'ennemi
      //il lance les dés
      this.throwTheDice(2);
      //calcul du resultat

      let total = this.randomDice1 + this.randomDice2;
      this.log = ("Vous attaquez de :  " + total + " (total des dés).");
      

      if (total >= this.toHitEnemy) {
        
        this.log = this.log+"\nLe coup est réussi.";
        console.log("total: "+total+"|"+"hitEnnemy: "+this.toHitEnemy+"|"+"weapon: "+this.weapon+"|"+"armure: "+this.enemyArmor+"|")
        let damage = total - this.toHitEnemy + this.weapon - this.enemyArmor;
        
        if (this.Id == 159) {
          
          damage = damage * 2;
        }

        this.enemyLifePoints = this.enemyLifePoints - damage;
        console.log("POINT DE VIE ENNEMY:"+this.enemyLifePoints)
        this.log = this.log+"\nVous faites à l'ennemi :  " + damage +" points de dégats.\nIl reste à l'ennemi : " +
        this.enemyLifePoints +" points.";
        
        if (this.enemyLifePoints <= 10) {
          this.displayMovement();
        }
      } else {
        this.log = this.log+"\nSapristi! Vous l'avez manqué !";
        
      }
    },

    EnemyHitJoueur() {
      let btnAttack = document.getElementsByClassName("btnAttack");
      btnAttack[1].style.display = "none";
      btnAttack[0].style.display = "block";
      this.throwTheDice(2);

      let total = this.randomDice1 + this.randomDice2;

      if (total >= this.toHitPlayer) {
        let damage =
          total - this.toHitPlayer + this.enemyAttack - this.playerArmor;

        this.log = 
          "L'ennemi réussit à vous toucher, il vous inflige : " +
            damage +
            " points de dégats."
        ;
       

        this.remainingLifePoints = this.lifePoints - damage;
        this.lifePoints = this.remainingLifePoints;
        this.log = this.log+"\nIl vous reste : " + this.lifePoints + " points de vie.";
        
      } else {
        this.log ="\nL'ennemi vous rate.";
        
      }
      if (this.$route.query.id == 159) {
        
        console.log("C'est bon");
        console.log(this.lifePoints);
        console.log(this.startingLifePoints);
        if (this.lifePoints <= this.startingLifePoints - 10) {
          this.goTo(1);
        } else if (this.MyJson.book[this.Id].enemy[0].enemyLifePoints <= 10) {
          this.goTo(2);
        }
      } else {
        if (this.lifePoints <= 0) {
          this.goTo(14);
        }
      }
    },
    fight() {
      console.log(this.playerInitiative == 1);
      if (this.playerInitiative == 1) {
        this.log = "C'est à vous de commencer à frapper.";
        
        let btnAttack = document.getElementsByClassName("btnAttack");
        btnAttack[0].style.display = "block";
        btnAttack[1].style.display = "none";
        let startFightBtn = document.getElementsByClassName("startFightBtn");
        startFightBtn[0].style.display = "none";
        // this.JoueurHitEnemy();
        if (this.enemyLifePoints <= 5) {
          console.log("l'ennemi est assommé");
        } else {
          this.EnemyHitJoueur();
        }
      } else if (this.playerInitiative == 2) {
        // console.log("this.playerInitiative : " + this.playerInitiative);
        this.log = this.log+"\nL'ennemi commence";
        // this.log.shift();
        this.EnemyHitJoueur();
      } else {
        // console.log("this.playerInitiative : " + this.playerInitiative);
        this.log = this.log+
          "\nLes dés ont été lancés pour déterminer qui commence, le score affiché à gauche sera le vôtre."
        ;
        
        this.throwTheDice(2);
        

        this.whoStarts();
      }
      if (this.$route.query.id == 159) {
        console.log("C'est bon");
        console.log(this.lifePoints);
        console.log(this.startingLifePoints);
        if (this.lifePoints <= this.startingLifePoints - 10) {
          this.goTo(1);
          this.lifePoints = this.startingLifePoints;
        } else if (this.enemyLifePoints <= 10) {
          this.goTo(2);
          this.lifePoints = this.startingLifePoints;
        }
      } else {
        if (this.lifePoints <= 0) {
          this.goTo(14);
        }
      }
    },
    whoStarts() {
      console.log(
        "randomdice1 : " +
          parseInt(this.randomDice1) +
          " randomdice2 : " +
          this.randomDice2
      );

      if (this.randomDice1 == this.randomDice2) {
        this.log = 
          "Egalité, les dés ont été relancés. Veuillez cliquer sur le bouton d'attaque"
        ;
        this.throwTheDice();
        return this.whoStarts();
      } else if (this.randomDice1 > this.randomDice2) {
        // signifie que c'est le joueur qui commence
        let btnAttack = document.getElementsByClassName("btnAttack");
        btnAttack[0].style.display = "block";
        let startFightBtn = document.getElementsByClassName("startFightBtn");
        startFightBtn[0].style.display = "none";
      } else if (this.randomDice1 < this.randomDice2) {
        let startFightBtn = document.getElementsByClassName("startFightBtn");
        startFightBtn[0].style.display = "none";
        let btnAttack = document.getElementsByClassName("btnAttack");
        btnAttack[1].style.display = "block";
      }
    },
    drinkPotion(nom) {
      
      nom = nom.message
      if (nom == "Potions Curatives") {
        this.throwTheDice(2);
        this.lifePoints = this.lifePoints + (this.randomDice1 + this.randomDice2);
      } else if (nom == "Onguents") {
        this.lifePoints = this.lifePoints + 5;
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
  box-sizing: border-box;
  outline: none;
}

@font-face {
  font-family: "Irish";
  src: url("../assets/IrishUncialfabeta-Bold.ttf");
}
html,
body {
  max-height: 100vh;
  width: 100%;
}

h3 {
  margin: 40px 0 0;
}
.big_ctn {
  width: 100%;
  display: flex;

  justify-content: center;
  align-items: flex-start;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("../assets/scrollBack.jpeg");
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  z-index: 1;
}
.superDiv {
  display: flex;
  flex-direction: column;
  /*background-color: aquamarine;*/
}
.topDiv {
  /*width: 80%;*/
  position: relative;
  height: 50px;
  display: flex;
  align-items: flex-end;
  /*background-color: blue;*/
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

#backgroundImg {
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
  text-align: justify;
}

#scrollable {
  height: 60vh;
  overflow: auto;
  margin-bottom: -300px;
}

p {
  font-family: Irish;
  font-size: 1.2em;
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
  top: 0px;
  position: relative;
  z-index: 10;
  width: 210px;
  height: 40px;
}

.combat {
  top: 100px;
  display: block;
  width: 500px;
  height: 700px;
  background-image: url("../assets/shield-removebg-preview.png");
  position: absolute;
  z-index: 10;
  display: none;
  bottom: 150px;
  border-radius: 5%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  padding-top: 100px;
  color: black;
  font-family: Augusta;
  text-shadow: 1px 1px 1px 1px #666;
}

#game {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /*background-color: greenyellow;*/
}

.pTitle {
  font-family: Irish;
}

.container {
  width: 100%;

  display: flex;
  flex-direction: row;
}

.player {
  width: 50%;
  height: 100px;
}

.enemy {
  width: 50%;
  height: 100px;
}
.log {
  width: 100%;
  height: 100px;
  bottom: 100%;
}
.action {
  width: 100%;
  height: 200px;
}
.allLogs {
  width: 100%;
  height: 100px;
  overflow: scroll;
}
.btn {
  /*margin: 30px;*/
  height: 40px;
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
  width: 100%;
  /*background-color: aqua;*/
}
.btnChoices {
  margin-bottom: 20px;
}

.fightDice {
  display: flex;
  justify-content: center;
}
#movementButton {
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  width: 100%;
}
.close-container {
  position: relative;
  top: -20px;
  left: 400px;
  /*margin: auto;*/
  width: 25px;
  height: 25px;
  /*margin-top: 100px;*/
  cursor: pointer;
}

.leftright {
  height: 4px;
  width: 25px;
  position: absolute;
  /*margin-top: 24px;*/
  background-color: black;
  border-radius: 2px;
  transform: rotate(45deg);
  transition: all 0.3s ease-in;
}

.rightleft {
  height: 4px;
  width: 25px;
  position: absolute;
  /*margin-top: 24px;*/
  background-color: black;
  border-radius: 2px;
  transform: rotate(-45deg);
  transition: all 0.3s ease-in;
}
.btnAttack {
  display: none;
  margin: auto;
}
.close {
  /* margin: 60px 0 0 5px; */
  position: absolute;
}

.close-container:hover .leftright {
  transform: rotate(-45deg);
  background-color: red;
}
.close-container:hover .rightleft {
  transform: rotate(45deg);
  background-color: red;
}
.close-container:hover label {
  opacity: 1;
}
.divAttackBtn {
  width: 100%;
  background-color: green;
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.divSpells {
  width: 98%;
  margin-left: 1%;
  /*background-color: green;*/
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.divFightBtn {
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: space-evenly;
  justify-content: space-around;
}
#divSorts {
  display: block;
}

.btnSpell {
  width: 165px;
}
table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
}
table {
  width: 100%;
}
th {
  height: 50px;
}
td {
  height: 50px;
}
</style>
