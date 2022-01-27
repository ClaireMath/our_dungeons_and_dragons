<template>
  <div id="leftPage">
    <div id="menuItems">
      <h3 id="hp">Points de vie</h3>

      <div id="hpBar">
        <div>{{ lifePoints }}/{{ startingLifePoints }}</div>
      </div>

      <h3 id="inventaire">Inventaire</h3>

      <h3 id="dream">Temps du rêve</h3>

      <h3 id="param" @click="emitOpenParam">Paramètres</h3>

      <h3></h3>
    </div>
    <div id="leftBtn">
      <div id="lStar">
        <img
          id="menuStar"
          src="../assets/sideMenuStar.png"
          alt="star"
          @click="toggleLeft()"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Action from "./Action";
export default {
  
  name: "LeftPage",
  props: {
    lifePoints: Number,
    startingLifePoints: Number
  },
  data() {
    return {
    
      pageOpened: false,
    };
  },

  created: function () {
  },

  methods: {
    toggleLeft() {
      console.log("starting lp " + startingLifePoints);
      let startingLifePoints = this.startingLifePoints;
      console.log("starting life points : " + startingLifePoints);
      let hpBar = document.getElementById("hpBar");
      let lifePoints = this.lifePoints;
      
      let lifeBar = lifePoints / startingLifePoints;
      lifeBar = lifeBar * 100;
      let lBar = lifeBar + "%";
      console.log("Life bar " + lBar);
      hpBar.style.setProperty("--lifeBar", lBar);

      let leftPage = document.getElementById("leftPage");
      let lStar = document.getElementById("lStar");
      let hp = document.getElementById("hp");
      let inv = document.getElementById("inventaire");
      let dream = document.getElementById("dream");
      let param = document.getElementById("param");
      this.pageOpened = !this.pageOpened;
      if (this.pageOpened == true) {
        leftPage.style.cssText =
          "transition-property: width; transition-duration: 1000ms; width: 200px";
        lStar.style.cssText = 
          "transform: rotate(90deg)";
        hp.style.cssText =
          "transition-property: left; transition-duration: 1000ms; left: 50px";
        hpBar.style.cssText =
          "transition-property: left; transition-duration: 1000ms; left: 50px";
        inv.style.cssText =
          "transition-property: left; transition-duration: 1000ms; left: 50px";
        dream.style.cssText =
          "transition-property: left; transition-duration: 1000ms; left: 50px";
        param.style.cssText =
          "transition-property: left; transition-duration: 1000ms; left: 50px";
        hpBar.style.setProperty("--lifeBar", lBar);
      } else {
        leftPage.style.width = "0px";
        lStar.style.transform = "rotate(0deg)";
        hp.style.left = "-200px";
        hpBar.style.left = "-200px";
        inv.style.left = "-200px";
        dream.style.left = "-200px";
        param.style.left = "-200px";
        hpBar.style.setProperty("--lifeBar", lBar);
      }
    },
    emitOpenParam() {
      this.$emit("openParam", { message: "parametre" });
    },
  },
};
</script>

<style scoped>
:root {
  --lifeBar: "";
}

@font-face {
  font-family: "Augusta";
  src: url("../assets/augusta/Augusta.ttf");
}

#leftPage {
  top: -4%;
  width: 0px;
  height: 100vh;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("../assets/gate-removebg-preview.png");
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background-size: cover;
}

#menuStar {
  width: 150px;
}

#lStar {
  cursor: pointer;
  width: 150px;
  transition-property: transform;
  transition-duration: 1000ms;
}

#leftBtn {
  position: relative;
  left: -142px;
  top: -0px;
  align-self: flex-end;
  justify-self: right;
  z-index: 3;
  transition-property: transform;
  transition-duration: 1000ms;
}

#menuItems {
  position: relative;
  z-index: 2;
  text-justify: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

#hp {
  position: relative;
  left: -200px;
}
#hpBar {
  background: linear-gradient(to top, red var(--lifeBar), #eee0ee66 0%);
  border: solid;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  position: relative;
  left: -200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Augusta;
  font-size: 1.2em;
}
#inventaire {
  position: relative;
  left: -200px;
  cursor: pointer;
}

#dream {
  position: relative;
  left: -200px;
}

#param {
  position: relative;
  left: -200px;
  cursor: pointer;
}

h3 {
  font-family: Augusta;
  color: black;
  font-size: 1.2em;
  text-shadow: none;
  transition: text-shadow;
  text-shadow: 0 0 20px 000;
}

h3:hover {
  font-size: 1.2em;
  text-shadow: 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff, 0 0 50px #fff,
    0 0 60px #fff, 0 0 70px #fff, 0 0 80px #fff;
}
</style>
