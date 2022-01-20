<template>
  <div id="leftPage">
    <h1>This is the left Page</h1>
    <div class="leftBtn">
      <div class="star">
        <input
          type="image"
          id="menuStar"
          src="./sideMenuStar.png"
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
      let star = document.getElementById("star");
      this.pageOpened = !this.pageOpened;
      if (this.pageOpened == true) {
        leftPage.style.cssText =
          "transition-property: width; transition-duration: 500ms; width: 300%";
        star.style.cssText =
          "transition-property: transform; transition-duration: 500ms; transform: rotate(30deg)";
      } else {
        leftPage.style.width = "100%";
        star.style.transform = "rotate(0deg)";
      }
      console.log(this.pageOpened);
      console.log(document.getElementById("leftPage").style.width);
    },
  },
};
</script>

<style scoped>
#leftPage {
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

.leftBtn {
  position: relative;
  left: 51px;
  align-self: center;
  justify-self: right;
}
</style>
.star:active{
  transform: rotate(0deg);
}