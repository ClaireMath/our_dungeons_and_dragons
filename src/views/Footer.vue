<template>
  <div class="footer">
    <footer>
      <h1>This is the footer</h1>
    </footer>
  </div>
</template>

<style scoped>
div {
  background-color: whitesmoke;
}
h1 {
  color: black;
}
</style>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.footer {
  position: relative;
  background-color: grey;
  bottom: 0;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-property: height;
  transition-duration: 500ms;
  transition-property: bottom;
  transition-duration: 500ms;
  z-index: 6;
  overflow: visible;
}

.footer h1 {
  color: #2c3e5000;
  transition-property: color;
  transition-duration: 500ms;
}

.footer:hover {
  height: 120px;
  bottom: 80px;
}

.footer:hover h1 {
  color: #2c3e50;
}
</style>

