<template>
  <div id="leftPage">
    <div id="menuItems">
      <div id="hp">
        <h3>Points de vie</h3>
      </div>
      <div id="inventaire">
        <h3>Inventaire</h3>
      </div>
      <div id="sorts">
        <h3>Sorts</h3>
      </div>
      <div id="journal">
        <h3>Journal</h3>
      </div>
    </div>
    <div id="leftBtn">
      <div id="star">
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
export default {
  name: "LeftPage",
  data() {
    return {
      pageOpened: false,
    };
  },
  methods: {
    toggleLeft() {
      let leftPage = document.getElementById("leftPage");
      //let leftBtn = document.getElementById("leftBtn");
      let star = document.getElementById("star");
      let hp = document.getElementById("hp");
      let inv = document.getElementById("inventaire");
      let sorts = document.getElementById("sorts");
      let journal = document.getElementById("journal");
      this.pageOpened = !this.pageOpened;
      if (this.pageOpened == true) {
        //leftBtn.style.left = "50px";
        leftPage.style.cssText =
          "transition-property: width; transition-duration: 1000ms; width: 200px";
        
        star.style.cssText =
          "transform: rotate(90deg)";
        
        hp.style.cssText = "transition-property: left; transition-duration: 1000ms; left: 50px";
        inv.style.cssText = "transition-property: left; transition-duration: 1000ms; left: 50px";
        sorts.style.cssText = "transition-property: left; transition-duration: 1000ms; left: 50px";
        journal.style.cssText = "transition-property: left; transition-duration: 1000ms; left: 50px";
      } else {
        leftPage.style.width = "10px";
        //leftBtn.style.left = "-126px";
        star.style.transform = "rotate(0deg)";
        hp.style.left = "-200px";
        inv.style.left = "-200px";
        sorts.style.left = "-200px";
        journal.style.left = "-200px";
      }
      console.log(this.pageOpened);
      console.log(document.getElementById("leftPage").style.width);
    },
  },
};
</script>

<style scoped>
@font-face {
 font-family: "Augusta";
 src: url("../assets/augusta/Augusta.ttf");
}

#leftPage {
  top: -4%;
  width: -10px;
  height: 100vh;
  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.5)), url("../assets/gate-removebg-preview.png");
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

#star {
  width: 150px;
  transition-property: transform;
  transition-duration: 1000ms;
}

#leftBtn {
  position: relative;
  left: -126px;
  top: -50px;
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
#inventaire {
  position: relative;
  left: -200px;
}
#sorts {
  position: relative;
  left: -200px;
}
#journal {
  position: relative;
  left: -200px;
}

h3 {
  font-family: Augusta;
  color:black;
  font-size: 1.2em;
  transition-duration: 300ms;
}

h3:hover {
  font-size: 1.4em;
  text-shadow: 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff, 0 0 50px #fff, 0 0 60px #fff, 0 0 70px #fff, 0 0 80px #fff;
}
</style>
.star:active{
  transform: rotate(0deg);
}