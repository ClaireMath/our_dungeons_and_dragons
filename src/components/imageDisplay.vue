<template>
  <div class="imageDisplay">
    <img src="require('../assets/' + $emit('imgDisplay'))" />
  </div>
</template>
<script>
import json from "../assets/data.json";

export default {
  components: {},
  name: "imageDisplay",
  props: {},
  data() {
    return {
      MyJson: json,
      img: this.$route.query.img,
    };
  },
  created: function () {
    this.Id = this.$route.query.id;
    this.img = this.MyJson.book[this.Id].img;
  },
  methods: {
    /* method used to display the image matching a paragraph Id */
    imgDisplay() {
      let img = this.img;
      console.log(img);
      return img;
    },
  },
};
</script>
<style scoped>
.imageDisplay {
  display: block;
}
</style>>

