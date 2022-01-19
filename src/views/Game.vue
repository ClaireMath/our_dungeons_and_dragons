<template>

<div>
    <p v-html="MyJson.book[Id].paragraph"></p>
    
    <div v-for= "choices in MyJson['book'][Id]['choices']" :key="choices['text']" >
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
import json from '../assets/data.json'

export default {
  name: "Game",
  props: {},
  data() {
    return{
        Id : null,
        MyJson: json,
        
    }
  },
 created: function(){
    
    this.Id = this.$route.query.id
    
    

  },

  methods: {
      goTo(nextid){
            this.$router.push('?id='+nextid)
            window.location.reload();
      }
  },
 
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
