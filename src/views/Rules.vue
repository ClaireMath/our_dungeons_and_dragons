<template>

<div>

<div class="box">


<div class="container">
  <div class="red flame"></div>
  <div class="orange flame"></div>
  <div class="yellow flame"></div>
  <div class="white flame"></div>
  <div class="black circle"></div>
  
</div>


<h1> RÈGLES </h1>




<div class="container">
  <div class="red flame"></div>
  <div class="orange flame"></div>
  <div class="yellow flame"></div>
  <div class="white flame"></div>
  <div class="black circle"></div>

</div>

</div>

<div><RulesCard/></div>


</div>

</template>




<script>
import RulesCard from '../views/RulesCard.vue'


export default {
  name: 'Rules',
  components: {
    RulesCard
   
  }
}


</script>


<style scoped>


body{
 margin: 0;
 padding: 0;
 font-family: 'Merriweather', serif;
  
}


.box {
    display: flex;
    flex-direction: row;
    margin-top: 10%;
}


.h1{
  color: #000000;
}

.containerp{
margin-top: 10%;
line-height: 200%;
padding: 3%;


}

body{
  background:black;
}

.container{
  margin:40px auto;
  width: 40px;
  height: 10px;
  position:relative;
  transform-origin:center bottom;
  animation-name: flicker;
  animation-duration:3ms;
  animation-delay:200ms;
  animation-timing-function: ease-in;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

.flame{
  bottom:0;
  position:absolute;
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;
  border-top-left-radius: 50%;
  transform:rotate(-45deg) scale(1.5,1.5);
}

.yellow{
  left:15px; 
  width: 30px;
  height: 30px;
  background:gold;
  box-shadow: 0px 0px 9px 4px gold;
}

.orange{
  left:10px; 
  width: 40px;
  height: 40px;
  background:orange;
  box-shadow: 0px 0px 9px 4px orange;
}

.red{
  left:5px;
  width: 50px;
  height: 50px;
  background:OrangeRed;
  box-shadow: 0px 0px 5px 4px OrangeRed;
}

.white{
  left:15px; 
  bottom:-4px;
  width: 30px;
  height: 30px;
  background:white;
  box-shadow: 0px 0px 9px 4px white;
}

.circle{
  border-radius: 50%;
  position:absolute;  
}

.black{
  width: 10px;
  height: 10px;
  left:25px;
  bottom:-25px; 
  background: black;
  box-shadow: 0px 0px 15px 10px black;
}


@keyframes flicker{
  0%   {transform: rotate(-1deg);}
  20%  {transform: rotate(1deg);}
  40%  {transform: rotate(-1deg);}
  60%  {transform: rotate(1deg) scaleY(1.04);}
  80%  {transform: rotate(-2deg) scaleY(0.92);}
  100% {transform: rotate(1deg);}
}

</style>