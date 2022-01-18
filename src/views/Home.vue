<template>
  <div class="home">
    <img class="logo" alt="logo" src="../assets/La quête (12).png">
    <img class ="skull" alt="skull" src="../assets/skull-g7b1e0377f_1920.jpg">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  }
}


</script>

<style scoped>

.skull {
  width: 40%;
  position: relative;
  right: 150px;
}

.logo {
  width: 20%;
  position: relative;
  bottom: 470px;
  right: 350px
}

</style>
