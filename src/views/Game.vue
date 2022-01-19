<template>
  <div>
    <!-- <input
      @click="throwTheDice()"
      type="button"
      class="btn"
      v-model="Jettez les dés"
    /> -->
    <p>Vous partez avec {{ startingLifePoints }} points de vie.</p>
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
      startingLifePoints: 20,
      lifePoints: 0,
      remainingLifePoints: 0,
      enemyLifePoints: {},
      weapon: 5,
      enemyWeapon: 0,
      playerArmor: 0,
      enemyArmor: 0,
      potion: "",
    };
  },
  created: function () {
    this.Id = this.$route.query.id;
    // this.getFirstLifePoints();
    // this.fight("player")
    this.EnemyHitJoueur()
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
      
      this.startingLifePoints = (this.randomDice1 + this.randomDice2) * 4;
      
    },
    JoueurHitEnemy(){
        this.enemyLifePoints = 20;   
        console.log(this.enemyLifePoints)
                 //A aller chercher dans le json quand il sera mis en forme

        //le joueur attaque l'ennemi
        //il lance les dés
        this.throwTheDice(2);
        //calcul du resultat
        
        let total = this.randomDice1 + this.randomDice2;
        console.log("Vous attaquez de:  "+total + "total des dés")
        if(total >= 6){
            console.log("le coup est reussi")
            let damage = (total-6)+this.weapon -this.enemyArmor 
            this.enemyLifePoints = this.enemyLifePoints - damage
            console.log("il reste à l'ennemi :" + this.enemyLifePoints)
        }
    },
    
    EnemyHitJoueur(){
        
        this.throwTheDice(2);
        
        let total = this.randomDice1 + this.randomDice2;
        console.log("total des dés : " +total);
        if(total >= 6){
            console.log("le coup est reussi car score égal ou supérieur à 6")
            let damage = (total-6)+this.enemyWeapon - this.playerArmor
            console.log("enemyweapon : " + this.enemyWeapon);
            console.log("playerarmor : " + this.playerArmor);
            console.log("damage = (total des dés moins 6 + l'arme de l'ennemi - l'armure du joueur)" + damage);
            this.remainingLifePoints = this.startingLifePoints - damage
            this.lifePoints = this.remainingLifePoints
            console.log("lifepoints restants du héro : " + this.remainingLifePoints);
            console.log("lifepoints : " + this.lifePoints);
        }

  },
  fight(whoStart){

      if(whoStart == "player"){
        while(this.enemyLifePoints >5 || this.lifePoints >0){
            this.JoueurHitEnemy()
            if(this.enemyLifePoints <=5){
                console.log("l'ennemi est assommé")
            }else{
                this.EnemyHitJoueur()
            }
        }
        }else{
           while(this.enemyLifePoints >5 || this.lifePoints >0){
            this.EnemyHitJoueur()
            if(this.lifePoints <=0){
                console.log("l'ennemi est assommé")
            }else{
                
                this.JoueurHitEnemy()
            }
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
