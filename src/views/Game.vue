<template>
<<<<<<< HEAD
<<<<<<< Updated upstream
=======
>>>>>>> a106c33 (addition of the random function for the dice and non final display of the result)
  <div>
    <!-- <input
      @click="throwTheDice()"
      type="button"
      class="btn"
      v-model="Jettez les dés"
    /> -->
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
    <button @click="throwTheDice(1)">Jettez un dé</button>
    <button @click="throwTheDice(2)">Jettez 2 dés</button>
    
    <p v-if="randomDice" >{{ randomDice }}</p>
    <p v-if="randomDice2" >{{ randomDice2 }}</p>
>>>>>>> a106c33 (addition of the random function for the dice and non final display of the result)
=======
    <p>Vous partez avec {{ lifePoints }} points de vie.</p>
    <button @click="throwTheDice(1)">Jettez un dé</button>
    <button @click="throwTheDice(2)">Jettez 2 dés</button>

    <p v-if="randomDice1">{{ randomDice1 }}</p>
    <p v-if="randomDice2">{{ randomDice2 }}</p>
>>>>>>> 3c23d73 (creation of the first life points)

    <p v-html="MyJson.book[Id].paragraph"></p>
<<<<<<< HEAD
    
    <div v-for= "choices in MyJson['book'][Id]['choices']" :key="choices['text']" >
       <input
        
>>>>>>> Stashed changes
=======

    <div
      v-for="choices in MyJson['book'][Id]['choices']"
      :key="choices['text']"
    >
      <input
>>>>>>> a106c33 (addition of the random function for the dice and non final display of the result)
        @click="goTo(choices['id'])"
        type="button"
        class="btn"
        v-model="choices['text']"
<<<<<<< HEAD
<<<<<<< Updated upstream
      />
    </div>
  </div>
</template>

<script>
import json from "../assets/data.json";
=======
        
=======
>>>>>>> a106c33 (addition of the random function for the dice and non final display of the result)
      />
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
import json from '../assets/data.json'
>>>>>>> Stashed changes
=======
import json from "../assets/data.json";
>>>>>>> a106c33 (addition of the random function for the dice and non final display of the result)

export default {
  name: "Game",
  props: {},
  data() {
<<<<<<< HEAD
<<<<<<< Updated upstream
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
=======
    return{
        Id : null,
        MyJson: json,
        
    }
=======
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
>>>>>>> a106c33 (addition of the random function for the dice and non final display of the result)
  },
  created: function () {
    this.Id = this.$route.query.id;
    this.getFirstLifePoints();
  },

  methods: {
<<<<<<< HEAD
      goTo(nextid){
            this.$router.push('?id='+nextid)
            window.location.reload();
      }
  },
 
}

>>>>>>> Stashed changes
=======
    goTo(nextid) {
      this.$router.push("?id=" + nextid);
      window.location.reload();
    },
<<<<<<< HEAD
   
throwTheDice(nbOfDice){
    if (nbOfDice==1) {
    this.randomDice = Math.floor(6*Math.random())+1;  
    } else {
    this.randomDice = Math.floor(6*Math.random())+1;  
    this.randomDice2 = Math.floor(6*Math.random())+1;  
    }
 },
//     rollDice(dice1),
//     rollDice(dice2),
//     rollDice(dice3);    
// }
//   },
}}
>>>>>>> a106c33 (addition of the random function for the dice and non final display of the result)
=======

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
>>>>>>> 3c23d73 (creation of the first life points)
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
<<<<<<< HEAD
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
=======

>>>>>>> 3601ea3 (test)
.big_ctn {
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
