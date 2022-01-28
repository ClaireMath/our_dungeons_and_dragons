<template>
    <div class="params" id="div">
        <div class="close">
            <button class="btn" @click="close" >X</button>
        </div>
        
        <h1>Paramètres</h1>
        <h2 style="margin-top:20px;">Son</h2>
        <div class="son" >
            
            <div class="OneParam" style="margin-top:30px;">
                <label>Couper le son:</label> <input type="checkbox" id="volumeIsActive">
            </div>
            <div style="margin-top:10px;" class="OneParam">
                <label>Volume :</label> <input type="range" id="volume">
            </div>
        </div>
        <h2 style="margin-top:10px;">Partie</h2>
        <div class="partie" style="margin-top:30px;">
            <div class="OneParam" style="margin-top:10px;">
                <button class="btn2">Sauvegarder</button>
            </div>
             <div class="OneParam" style="margin-top:25px;">
                <button class="btn2">Recommencer</button>
            </div>
        </div>
        
    </div>
</template>


<script>


export default{
    data(){
        return{

        }
    },methods:{
        playSound(sound){
            let volumeIsActive = document.getElementById("volumeIsActive").checked ;
            let volume = document.getElementById("volume").value ;
            console.log(volumeIsActive);
            if(volumeIsActive === false){
                sound.volume = volume/100;
                sound.play();
            }
           
            
        },
        close(){
            let div = document.getElementById("div");
            div.style.display = "none"
        },
        open(){
            let div = document.getElementById("div");
            div.style.display = "flex"
        }
    },mounted(){
        
    }
}
</script>


<style scoped>
@font-face {
  font-family: "Irish";
  src: url("../assets/IrishUncialfabeta-Bold.ttf");
}
*{
    margin: 0px;
}
.params{
    width: 398px;
    height: 594px;
    box-shadow: 18px 26px 15px 5px rgba(0,0,0,0.37);
    background-color: rgb(227, 200, 158);
    background-image:  url("../assets/fondParam.png");
    color:white;
    position: absolute;
    background-repeat: no-repeat;
    background-size: contain;
    font-size: 21px;
    font-family: Irish;
    display: none;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 100px;
    border:solid black;
    transition: all .4s ease;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    bottom: 100px;
}
.params:hover{
     box-shadow: 10px 10px 15px 5px rgba(0,0,0,0.82);
}

.partie
{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.son{
    display: flex;
    flex-direction: column;
    height: 100px;
    width: 290px;
    display: flex;
    

}

.OneParam{
    display: flex;
    justify-content: space-between;
}

.close{
    width:100%;
    display: flex;
    justify-content: flex-end;
    
    
    cursor: pointer;
}

.btn
{
    width: 25px;
    height: 25px;
    background-color: transparent;
    margin-right: 5%;
    margin-top: 10px;
}

.btn:hover 
{
    color: red;
}

.btn2 {
  /*margin: 30px;*/
  height: 40px;
  box-shadow: inset 0px 1px 0px 0px #a6827e;
  background: linear-gradient(to bottom, #7d5d3b 5%, #634b30 100%);
  background-color: #7d5d3b;
  border-radius: 10px;
  border: 2px solid goldenrod;
  display: inline-block;
  cursor: pointer;
  color: goldenrod;
  font-size: 17px;
  width: 200px;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #4d3534;
}

.btn2:hover {
  background: linear-gradient(to bottom, #634b30 5%, #7d5d3b 100%);
  background-color: #634b30;
  border: 3px solid goldenrod;
}
.btn2:active {
  position: relative;
  top: 1px;
  border: 3px solid goldenrod;
}
</style>
