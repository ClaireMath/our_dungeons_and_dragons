<template>
  <div class="header">
    <header>
      <h1>This is the header</h1>
    </header>
  </div>
<<<<<<< HEAD
  <header>
    <h1>LE CHATEAU DES TÉNÈBRES</h1>
  </header>
=======
>>>>>>> 54238c8 (Commit main page CSS 0.1)
</template>

<script>
export default {
  name: "Header",
};
</script>
<<<<<<< HEAD



<style scoped>

header {
  background-color: whitesmoke;
}
h1 {
  color: black;
}
</style>

=======
>>>>>>> 54238c8 (Commit main page CSS 0.1)

<style>
.header {
  position: relative;
  background-color: grey;
  left: 0;
  top: 0;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-property: height;
  transition-duration: 500ms;
  z-index: 6;
  overflow: visible;
}

.header h1 {
  color: #2c3e5000;
  transition-property: color;
  transition-duration: 500ms;
}

.header:hover {
  height: 120px;
}

.header:hover h1 {
  color: #2c3e50;
}
</style>
