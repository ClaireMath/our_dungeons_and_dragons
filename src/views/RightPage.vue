<template>
  <div id="rightPage">
    <h1>This is the right Page</h1>
    <div class="rightBtn">
      <div class="star">
        <img
          id="menuStar"
          src="../assets/sideMenuStar.png"
          alt="star"
          @click="toggleRight()"
        >
      </div>
    </div>
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
      this.pageOpened = !this.pageOpened;
      if (this.pageOpened == true) {
        rightPage.style.cssText =
          "transition-property: width, right; transition-duration: 500ms; width: 250%; right: 150%";
        star.style.left = "-250vh";
          "transition-property: right; transition-duration: 500ms; right: 2000px";
      } else {
        rightPage.style.width = "100%";
        rightPage.style.right = "0";
        star.style.transform = "rotate(0deg)";
      }
      console.log(this.pageOpened);
      console.log(document.getElementById("rightPage").style.width);
    },
  },
};
</script>

<style scoped>
#rightPage {
  top: -4%;
  right: 0px;
  width: 100%;
  height: 100vh;
  background-color: blue;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
}

#menuStar {
  width: 100px;
}

.star {
  width: 100px;
  transition-property: transform;
  transition-duration: 500ms;
}

.rightBtn {
  position: relative;
  right: 194px;
  align-self: center;
  justify-self: left;
}
</style>
.star:active{
  transform: rotate(0deg);
}