<template>
  <div id="rightPage">
    <!--<div id="RightCtn">-->
      <div id="menuItems">
        <div id="save">
          <h3>Sauvergarder</h3>
        </div>
        <div id="restart">
          <h3>Recommencer</h3>
        </div>
        <div id="sound">
          <h3>Son</h3>
        </div>
        
      </div>
      <div id="rightBtn">
        <div id="star">
          <img
            id="menuStar"
            src="../assets/sideMenuStar.png"
            alt="star"
            @click="toggleRight()"
          />
        </div>
      </div>

      
    <!--</div>-->
  </div>
</template>

<script>
export default {
  name: "RightPage",
  data() {
    return {
      pageOpened: false,
    };
  },
  methods: {
    toggleRight() {
      let rightPage = document.getElementById("rightPage");
      let star = document.getElementById("star");
      let save = document.getElementById("save");
      let restart = document.getElementById("restart");
      let sound = document.getElementById("sound");
      let rightBtn = document.getElementById("rightBtn");
      this.pageOpened = !this.pageOpened;
      if (this.pageOpened == true) {
        rightPage.style.cssText =
          "transition-property: width, left; transition-duration: 1000ms; width: 175%; left: 0%";
        star.style.cssText = "transform: rotate(-90deg)";
        rightBtn.style.left = "0%";

        save.style.cssText =
          "transition-property: left; transition-duration: 1000ms; right: 50px";
        restart.style.cssText =
          "transition-property: left; transition-duration: 1000ms; right: 50px";
        sound.style.cssText =
          "transition-property: left; transition-duration: 1000ms; right: 50px";
      } else {
        rightPage.style.width = "150%";
        rightPage.style.left = "200px";
        star.style.transform = "rotate(0deg)";
        rightBtn.style.left = "-100%";
        save.style.right = "-200px";
        restart.style.right = "-200px";
        sound.style.right = "-200px";
      }
      console.log(this.pageOpened);
      console.log(document.getElementById("rightPage").style.width);
    },
  },
};
</script>

<style scoped>
@font-face {
  font-family: "Augusta";
  src: url("../assets/augusta/Augusta.ttf");
}

/*#rightCtn {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}*/

#rightPage {
  top: -4%;
  left: 200px;
  width: 150%;
  height: 100vh;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("../assets/gate-reverse-removebg-preview.png");
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  background-size: cover;
  flex-direction: column;
}

#menuStar {
  width: 150px;
}

#star {
  width: 150px;
  transition-property: transform;
  transition-duration: 1000ms;
}

#rightBtn {
  position: relative;
  right: 136px;
  top: -0px;
  align-self: flex-start;
  justify-self: left;
  z-index: 3;
  transition-property: transform;
  transition-duration: 1000ms;
}

#menuItems {
  left: 0;
  position: relative;
  z-index: 2;
  text-justify: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-grow: 6;
}

#save {
  position: relative;
  right: -200px;
}
#restart {
  position: relative;
  right: -200px;
}
#sound {
  position: relative;
  right: -200px;
}

h3 {
  font-family: Augusta;
  color: black;
  font-size: 1.2em;
  transition-duration: 300ms;
}

h3:hover {
  font-size: 1.4em;
  text-shadow: 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff, 0 0 50px #fff,
    0 0 60px #fff, 0 0 70px #fff, 0 0 80px #fff;
}
</style>
.star:active{
  transform: rotate(0deg);
}