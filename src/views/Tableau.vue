<template>
  <div class="big_ctn">
    <table>
      <thead>
        <th>Notre bouton</th>
        <th>Description</th>
        <th>Nombre de sorts restants</th>
        <th>Dommages causés</th>
      </thead>
      <tbody>
        <tr>
        <td>
          <button class="btn">Doigt de feu I</button>
    </td>
       
        <td>Blablabla 2
        </td>
        <td>2</td>
        <td>5</td>
        </tr>
         <tr>
        <td>
          <button class="btn">Doigt de feu II</button>
    </td>
       
        <td>Blablabla
        </td>
        <td>3</td>
        <td>6</td>
        </tr>
           <tr>
        <td>
          <button class="btn">Boule de feu I</button>
    </td>
       
        <td>Blablabla
        </td>
        <td>3</td>
        <td>6</td>
        </tr>
           <tr>
        <td>
          <button class="btn">Boule de feu II</button>
    </td>
       
        <td>Blablabla
        </td>
        <td>3</td>
        <td>6</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
//import toggleLeft from "./LeftPage.vue";

export default {
  components: {},
  name: "Tableau",
  props: {},
  data() {
    return {};
  },
  created: function () {},

  methods: {},
};
</script>

<style scoped>
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}

@font-face {
  font-family: "Irish";
  src: url("../assets/IrishUncialfabeta-Bold.ttf");
}
html,
body {
  height: 100%;
  width: 100%;
}
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
  
}
</style>
