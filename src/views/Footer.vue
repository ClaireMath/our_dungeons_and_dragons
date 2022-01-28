<template>
  <div class="footer">
    <footer>
      <div class="divNav">
      <span>Mention Légales</span><br>
      <span>© 2022 QUEST STORIES</span>
    </div>
    
    </footer>
  </div>
</template>

<style scoped>
div {
  font-family: 'Merriweather', serif;
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
#nav {
  display:hidden;
}

#nav:hover {
  display: flex;
}

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
 a {
  font-weight: bold;
  color: black;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #91583d;
}

.logo {
  width: 15%;
  position: absolute;
  top: -70px;
  left: -50px;
}

.block {
  position: absolute;
  left: 73%;
}
</style>

