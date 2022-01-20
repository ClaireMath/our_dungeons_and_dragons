<template>
  <div class="header">
    <header>
      <h1>This is the header</h1>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
.header {
  position: relative;
  background-color: green;
  left: 0;
  top: 0;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-property: height;
  transition-duration: 500ms;
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
