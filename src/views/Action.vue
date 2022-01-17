<template>
  <div class="big_ctn">
    <h1>Hi and welcome, brave Knight !<br /></h1>
    <h3>Take action against this dragon</h3>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis natus totam optio facere suscipit sapiente corrupti magnam saepe eaque repellendus eligendi distinctio dolor, hic harum voluptas, ad quos sequi delectus.</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt deserunt asperiores officia nihil? Non eos odit quo consequatur veritatis, natus neque voluptatum sint doloribus fugit dolorem ut earum accusantium autem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nam explicabo, reprehenderit quam delectus eius quos cum ipsam eum repudiandae ea quidem doloribus inventore incidunt eveniet alias! Nulla, aliquid voluptates.</p>
    <button></button>
    
    <div v-if="left">ce paragraphe s'affiche si je clique sur gauche</div>
    <div v-if="right">e paragraphe s'affiche si je clique sur droite</div>
  </div>
</template>

<script>
export default {
  name: "Action",
  props: {

  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

</style>
