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
      weapon: 5,
      enemyWeapon: null,
      enemyArmor: 0,
      potion: "",
    };
  },
  created: function () {
    this.Id = this.$route.query.id;
    this.getFirstLifePoints();
    this.fight()
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
      
      this.lifePoints = (this.randomDice1 + this.randomDice2) * 4;
      
    },
    JoueurHitEnemy(){
        this.enemyLifePoints = 20;              //A aller chercher dans le json quand il sera mis en forme
        //le joueur attaque l'ennemi
        //il lance les dés
        this.throwTheDice(2);
        //calcul du resultat
        let total = this.randomDice1 + this.randomDice2;
        console.log("Vous attaquez de:  "+total)
        if(total >= 6){
            console.log("le coup est reussi")
            let damage = (total-6)+this.weapon -this.enemyArmor 
            this.enemyLifePoints = this.enemyLifePoints - damage
            console.log(this.enemyLifePoints)
        }
    },
    
    EnemyHitJoueur(){
        
        this.throwTheDice(2);
        
        let total = this.randomDice1 + this.randomDice2;
        
        if(total >= 6){
            console.log("le coup est reussi")
            let damage = (total-6)+this.enemyWeapon - armor
            this.lifePoints = this.lifePoints - damage
            
        }

  },
  fight(whoStart){

      if(whoStart == "player"){
        while(this.enemyLifePoints >5 || this.lifePoints >0){
            this.JoueurHitEnemy()
            if(this.enemyLifePoints <=5){
                console.log("l'ennemie est assomé")
            }else{
                this.EnemyHitJoueur()
            }
        }
        }else{
           while(this.enemyLifePoints >5 || this.lifePoints >0){
            this.EnemyHitJoueur()
            if(this.lifePoints <=0){
                console.log("l'ennemie est assomé")
            }else{
                
                this.JoueurHitEnemy()
            }
        } 
      }


  }
}

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
