<template>
  <div class="backgroundcontainer">
    <img
      class="imagenight"
      src="http://res.cloudinary.com/dwckhrkqn/image/upload/v1495333433/wallpaper-dark-forest-2_zy4zss.jpg"
      alt="First Slide"
    />

    <div id="dreamTime">
      <h1>LE TEMPS DU RÊVE</h1>
      <p class="dreamRules" v-html="MyJson.book[Id].paragraph"></p>
      <button type="button" class="btnnight" @click="throwTheDice(2)">
        ENTREZ
      </button>

      <button type="button" class="btnnight2" @click="openPopup()">
        COMBAT
      </button>

      <!-- <p class="paragraphe" </p> -->
      <Param ref="param" />

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

        <!-- <div class="diceThrow">
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
</div> -->

        <button id=btnTotalDice v-if="randomDice2" @click="goDreaming()">
          Vous avez fait : {{ totalDice }}. Cliquez-ici !
        </button>
      </div>
    </div>
  </div>
</template>


<script>
import json from "../assets/data.json";
import Param from "./param.vue";

export default {
  components: { Param },
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
      dicePoints: 0,
      totalDice: null,
      lifePoints: 0,
    };
  },

  created: function () {
    this.Id = this.$route.query.id;
    // this.name = this.MyJson.book[this.Id].enemy[0].name;
    // this.enemyLifePoints = this.MyJson.book[this.Id].enemy[0].enemyLifePoints;
    // this.enemyWeapon = this.MyJson.book[this.Id].enemy[0].enemyAttack;
    // this.enemyArmor = this.MyJson.book[this.Id].enemy[0].enemyArmor;
    // this.getFirstLifePoints();
    // this.fight("player")
  },
  mounted() {
    // this.verifCombat();
  },

  methods: {

    openPopup(){
      window.alert("EN CONSTRUCTION !");
    },


      beyAttack(){
    this.lifePoints = this.lifePoints - (this.randomDice1 + this.randomDice2)
    console.log("lifepoints : " + this.lifePoints);
    

      },

    goDreaming() {
      let totalDice = this.randomDice1 + this.randomDice2;
      console.log("TOTAL DICE :" + totalDice);
      let btnNight = document.querySelectorAll(".btnnight");
      btnNight[0].style.display = "none";

      switch (totalDice) {
        case 2:
            console.log("cas 2");
          this.$router.push("/Dream?id=161");
          window.location.reload();
          
          break;
        case 3:
            console.log("cas 3");
          this.$router.push("/Dream?id=162");
          window.location.reload();
         
          break;
        case 4:
            console.log("cas 4");
          this.$router.push("/Dream?id=163");
          window.location.reload();
          
          break;
        case 5:
            console.log("cas 5");
          this.$router.push("/Dream?id=164");
          window.location.reload();
          
          break;
        case 6:
            console.log("cas 6");
          this.$router.push("/Dream?id=165");
          window.location.reload();
         
          break;
        case 7:
            console.log("cas 7");
          this.$router.push("/Dream?id=166");
          window.location.reload();
          
          break;
        case 8:
            console.log("cas 8");
          this.$router.push("/Dream?id=167");
          window.location.reload();
          
          break;
        case 9:
            console.log("cas 9");
          this.$router.push("/Dream?id=168");
          window.location.reload();
  
          break;
        case 10:
            console.log("cas 10");
          this.$router.push("/Dream?id=169");
          window.location.reload();
          
          break;
          case 11:
            console.log("cas 11");
          this.$router.push("/Dream?id=170");
          window.location.reload();
         
          break;
        default:
          console.log("Relancez les dés");
      }
      // if (totalDice  == 2){
      //     this.$router.push('/Dream?id=162');
      //     window.location.reload();

      // }
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
        // this.diceThrow = false;
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
        // this.diceThrow = false;
        this.dice1 = false;
        this.dice2 = false;
        this.gif1 = true;
        this.gif2 = true;
        console.log("else throwthedice : gif1 :" + this.gif1);
        console.log("else throwthedice : dé :" + this.dice1);
        // this.dice1 = true;
        this.randomDice1 = Math.floor(6 * Math.random()) + 1;
        console.log(this.randomDice1);

        this.randomDice2 = Math.floor(6 * Math.random()) + 1;
        console.log(this.randomDice1);

        this.totalDice = this.randomDice1 + this.randomDice2;
        console.log("total = " + this.totalDice);

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
        // console.log("diceAnim else car 2 dés : gif1 :" + this.gif1);
        // console.log("diceAnim else car 2 dés : dé : " + this.dice1);
      }
    },

    getDicePoints() {
      this.gif1 = true;
      this.gif2 = true;
      console.log("getDicePoints : gif1 :" + this.gif1);
      console.log("getDicePoints :  dé :" + this.dice1);
      this.throwTheDice(2);
      this.dicePoints = this.randomDice1 + this.randomDice2;
    },
  },
};
</script>

<style scoped>
body {
  font-family: "Dark Dream";
  margin: 0;
  background: #000;
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

.imagenight {
  width: 100%;
}

#dreamTime {
  font-weight: 100;
  background: rgba(0, 0, 0, 0.3);
  color: white;
  position: absolute;
  top: 30%;
  left: 2%;
  padding: 2rem;
  width: 90%;
  margin: 2rem;

  font-size: 1.2rem;
}
h1 {
  font-size: 3rem;
  text-transform: uppercase;
  margin-top: 0;
  letter-spacing: 0.3rem;
}

.paragraphe {
  height: auto;
  overflow: auto;
  text-align: justify;
  padding: 10px;
  line-height: 150%;
}

.dreamRules {
  height: auto;
  overflow: auto;
  text-align: justify;
  padding: 10px;
  line-height: 150%;
}

.btnnight, .btnnight2 {
  background: rgba(0, 0, 0, 0.3);
  color: white;
  font-weight: bold;
  border-radius: 10%;
  width: 10%;
}

/* @media screen and (max-width: 500px) { 
  div{width:70%;} 
}
@media screen and (max-device-width: 800px) {
  html { background: url(https://thenewcode.com/assets/images/polina.jpg) #000 no-repeat center center fixed; }
  #bgvid { display: none; }
} */

.dicePackage {
  width: 200px;
  height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  /* position: absolute;
  bottom: 100%;
  z-index: 2; */
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

/* .diceThrow {
  width: 200px;
  height: 60px;
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
  cursor: pointer; */
/*background-color: fuchsia;*/
/* } */
.dice3D {
  width: 40px;
  height: 40px;
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



#btnTotalDice{
 background: rgba(0, 0, 0, 0.3);
  color: white;
  font-weight: bold;
  border-radius: 10%;
  width: 50%;

}

</style>