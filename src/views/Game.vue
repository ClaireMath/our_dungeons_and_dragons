<template>
  <div>
    <!-- <input
      @click="throwTheDice()"
      type="button"
      class="btn"
      v-model="Jettez les dés"
    /> -->
    <p>Vous partez avec {{ lifePoints }} points de vie.</p>
    <button @click="throwTheDice(1)">Jettez un dé</button>
    <button @click="throwTheDice(2)">Jettez 2 dés</button>

    <p v-if="randomDice1">{{ randomDice1 }}</p>
    <p v-if="randomDice2">{{ randomDice2 }}</p>

    <p v-html="MyJson.book[Id].paragraph"></p>

    <div
      v-for="choices in MyJson['book'][Id]['choices']"
      :key="choices['text']"
    >
      <input
        @click="goTo(choices['id'])"
        type="button"
        class="btn"
        v-model="choices['text']"
      />
    </div>
  </div>
</template>

<script>
import json from "../assets/data.json";

export default {
  name: "Game",
  props: {},
  data() {
    return {
      Id: null,
      MyJson: json,
      randomDice1: null,
      randomDice2: null,
      lifePoints: null,
      enemyLifePoints: {},
      enemyDamagePoints : null,
      enemyWeapon: null,
      enemyArmor: null,
      potion: "",
    };
  },
  created: function () {
    this.Id = this.$route.query.id;
    this.getFirstLifePoints();
  },

  methods: {
    goTo(nextid) {
      this.$router.push("?id=" + nextid);
      window.location.reload();
    },

    throwTheDice(nbOfDice) {
      if (nbOfDice == 1) {
        this.randomDice1 = Math.floor(6 * Math.random()) + 1;
      } else {
        this.randomDice1 = Math.floor(6 * Math.random()) + 1;
        this.randomDice2 = Math.floor(6 * Math.random()) + 1;
      }
    },
    getFirstLifePoints() {
      this.throwTheDice(2);
      console.log(this.randomDice1);
      console.log(this.randomDice2);
      this.lifePoints = (this.randomDice1 + this.randomDice2) * 4;
      console.log(this.lifePoints);
    },
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

.big_ctn {
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
