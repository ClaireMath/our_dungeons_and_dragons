<template>
  <div class="big_ctn">
    <!--<img class="backgroundImg" src="../assets/scrollBack.jpeg" alt="background">-->
    <div class="gameContainer">
      
      <div><LeftPage /></div>

      <div>
        
        <h1>Hi and welcome, brave Knight !<br /></h1>
        <h3>Take action against this dragon</h3>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
          natus totam optio facere suscipit sapiente corrupti magnam saepe eaque
          repellendus eligendi distinctio dolor, hic harum voluptas, ad quos
          sequi delectus.PROUT
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
          deserunt asperiores officia nihil? Non eos odit quo consequatur
          veritatis, natus neque voluptatum sint doloribus fugit dolorem ut
          earum accusantium autem.
        </p>

        <div class="btnCtn">
          <input
            v-if="btn1"
            @click="getNextParagraphLeft"
            type="button"
            class="btn"
            value="Gauche"
          />
          <input
            v-if="btn1"
            @click="getNextParagraphRight"
            type="button"
            class="btn"
            value="Droite"
          />
        </div>

        <div v-if="left">
          <p>ce paragraphe s'affiche si je clique sur GAUCHE</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            voluptas fugit neque aut iste, dolore cumque iusto! Explicabo
            reiciendis quidem vero voluptatem temporibus iure debitis aliquam,
            placeat velit hic magnam!
          </p>
          <div class="btnCtn">
            <input
              v-if="btn2"
              @click="getParagraph2Left"
              type="button"
              class="btn"
              value="Gauche"
            />
            <input
              v-if="btn2"
              @click="getParagraph2Right"
              type="button"
              class="btn"
              value="Droite"
            />
          </div>
        </div>
        <div v-if="right">
          <p>ce paragraphe s'affiche si je clique sur DROITE</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            voluptas fugit neque aut iste, dolore cumque iusto! Explicabo
            reiciendis quidem vero voluptatem temporibus iure debitis aliquam,
            placeat velit hic magnam!
          </p>
          <div class="btnCtn">
            <input
              v-if="btn2"
              @click="getParagraph2Left"
              type="button"
              class="btn"
              value="Gauche"
            />
            <input
              v-if="btn2"
              @click="getParagraph2Right"
              type="button"
              class="btn"
              value="Droite"
            />
          </div>
        </div>
      </div>
      <div><RightPage /></div>
    </div>
  </div>
</template>

<script>
import LeftPage from "./LeftPage.vue";
//import toggleLeft from "./LeftPage.vue";
import RightPage from "./RightPage.vue";
export default {
  components: { LeftPage, RightPage },
  name: "Action",
  props: {},
  data() {
    return {
      left: false,
      right: false,
      btn1: true,
      btn2: true,
    };
  },

 created: function() {
    
    },
    
  methods: {
    getNextParagraphLeft() {
      this.left = true;
      this.btn1 = false;
    },
    getNextParagraphRight() {
      this.right = true;
      this.btn1 = false;
    },
    getParagraph2Left() {
      this.left = true;
      this.btn2 = false;
    },
    getParagraph2Right() {
      this.right = true;
      this.btn2 = false;
    },
  },
};
</script>

<style scoped>
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
  height: 91%;
  padding-top: 9%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/scrollBack.jpeg");
  position: relative;
  z-index: 1;
  
}
.gameContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.backgroundImg {
  position: relative;
  z-index: -2;
  opacity: 50%;
  object-fit: cover;
}



</style>
<img class="backgroundImg" src="../assets/scrollBack.jpeg" alt="background">