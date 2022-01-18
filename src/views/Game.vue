<template>

<div>
    
    {{ MyJson["book"][Id]["paragraph"] }}
    <input
        
        @click="goTo(MyJson['book'][Id]['choice'][0]['id'])"
        type="button"
        class="btn"
        v-model="MyJson['book'][Id]['choice'][0]['text']"
        
      />
    
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
        MyJson: json
    }
  },

  methods: {
      goTo(nextid){
            this.$router.push('?id='+nextid)
            window.location.reload();
      }
  },
  created: function(){
      this.Id = this.$route.query.id
   

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
