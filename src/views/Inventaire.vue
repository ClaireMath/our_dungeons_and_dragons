<template>
    <div class="inventaire" id="inv">
        <div class="close">
            <button class="btns" @click="close" >X</button>
        </div>
        <h1>Inventaire</h1>
        <hr class="trait">
        <div class="infos">
            <h2>Pip</h2>
            
            <h3>Points de Vie: </h3>
            
            <h3>Argents: </h3>
            <br>
            <div class="infoArme">
                <h3>Arme:</h3>
                <select name="Arme" id="arme-select"></select>
            </div>
            <br>
            <div class="infoArmure">
                <h3>Armure:</h3>
                <select name="Armure" id="armure-select"></select>
            </div>
        
        </div>
        


        <div class="arme">
            <table>
                <thead>
                    <tr>
                        <th colspan="3">Armes</th>
                    </tr>
                </thead>
                <tbody id="arme">
                    <tr>
                        <td><strong>Nom</strong></td>
                        <td><strong>Effets</strong></td>
                        <td><strong>Dégats</strong></td>
                        
                    </tr>
                    
                    <tr>
                        <td class="ArmeName">E.J</td>
                        <td>4 au dés pour toucher</td>
                        <td>5</td>
                        
                    </tr>
                    <tr>
                        <td class="ArmeName">Dague</td>
                        <td>Une dague</td>
                        <td>2</td>
                        
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="armure">
            <table>
                <thead>
                    <tr>
                        <th colspan="3">Armures</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Nom</strong></td>
                        <td><strong>Effets</strong></td>
                        <td><strong>Protection</strong></td>
                        
                    </tr>
                    
                    <tr>
                        <td class="ArmureName">Pourpoint en peau de dragon</td>
                        <td>Annule 5 point de dégats</td>
                        <td>5</td>
                       
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="potion">
            <table>
                <thead>
                    <tr>
                        <th colspan="4">Potions</th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr>
                        <td><strong>Nom</strong></td>
                        <td><strong>Effets</strong></td>
                        <td><strong>Nombre</strong></td>
                        <td><strong>Equipé</strong></td>
                    </tr>
                    
                    <tr>
                        <td>Potions Curatives</td>
                        <td>Vous redonne 2d6 PV</td>
                        <td>18</td>
                        <td><button>Utiliser</button></td>
                    </tr>
                    <tr>
                        <td>Onguents</td>
                        <td>Restitue 5 PV</td>
                        <td>5</td>
                        <td><button>Utiliser</button></td>
                    </tr>
                </tbody>
                
            </table>
        </div>
        <div class="sorts">
            <table>
                <thead>
                    <tr>
                        <th colspan="4">Sorts</th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr>
                        <td><strong>Nom</strong></td>
                        <td><strong>Effets</strong></td>
                        <td><strong>Nombre</strong></td>
                        
                    </tr>
                    
                    <tr>
                        <td>Doigt de Feu</td>
                        <td>Inflige 10 points de dégats</td>
                        <td>10</td>
                        
                    </tr>
                    <tr>
                        <td>Boule de Feu</td>
                        <td>lancer 2d6 si vous faite plus de 5 vous infligez 75 points de dégats</td>
                        <td>2</td>
                        
                    </tr>
                </tbody>
                
            </table>
        </div>
    </div>
</template>

<script>


export default{

    data(){
        return{
            
        }
    },
    methods: {

        addArme(nom,effet,degat){
            let tr = document.createElement("tr");

            let tdNom = document.createElement("td");
            tdNom.setAttribute("class","ArmeName")
            var TxtNom = document.createTextNode(nom);
            tdNom.appendChild(TxtNom);

            let tdEffect = document.createElement("td");
            var TxtEffect = document.createTextNode(effet);
            tdEffect.appendChild(TxtEffect);


            let tdDegat = document.createElement("td");
            var TxtDegat = document.createTextNode(degat);
            tdDegat.appendChild(TxtDegat);

            

            

            tr.appendChild(tdNom)
            tr.appendChild(tdEffect)
            tr.appendChild(tdDegat)
            

            let div = document.getElementById("arme");
            div.appendChild(tr);
            


        },
        createOptions(){
            //arme
            let ArmeName = document.getElementsByClassName("ArmeName");
            let div = document.getElementById("arme-select");
            for(let i = 0; i< ArmeName.length; i++){
                let option = document.createElement("option");
                let txt = document.createTextNode(ArmeName[i].innerHTML)
                option.setAttribute("value",ArmeName[i].innerHTML)
                option.appendChild(txt)
                div.appendChild(option)
            }
            //armure  
            let ArmureName = document.getElementsByClassName("ArmureName");
            let div2 = document.getElementById("armure-select");
            for(let i = 0; i< ArmureName.length; i++){
                let option = document.createElement("option");
                let txt = document.createTextNode(ArmureName[i].innerHTML)
                option.setAttribute("value",ArmureName[i].innerHTML)
                option.appendChild(txt)
                div2.appendChild(option)
            }
        },
        open(){
            let div = document.getElementById("inv");
            div.style.display = "flex";
        },
        close(){
            let div = document.getElementById("inv");
            div.style.display = "none"
        },
        

    },
    mounted(){
        this.addArme("t","t",5);
        this.createOptions()
    }




}

</script>


<style>

.inventaire
{
    width: 600px;
    height: 650px;
    background-color: rgb(220,220,220);
    position: absolute;
    margin-left:30%;
    display: none;
    flex-direction: column;
    align-items: center;
    box-shadow: 18px 26px 15px 5px rgba(0,0,0,0.37);
    margin-top: 1000px;
    overflow: scroll;
     
    box-shadow: inset -8px 6px 15px 8px rgba(0,0,0,0.12);
}

.trait
{
    width: 30%;
    height: 2px;
    border:none;
    background-color: black;
}

.arme
{
    margin-top: 30px;
    width: 80%;
    height: auto;
    background-color: white;
}

table,
td {
    border: 1px solid #333;
}



table
{
    width: 100%;
}

thead,
tfoot {
    background-color: white;
    color: black;
}

.potion
{
    margin-top: 30px;
    width: 80%;
    height: auto;
    background-color: white;
}

.armure
{
    margin-top: 30px;
    width: 80%;
    height: auto;
    background-color: white;
}

.sorts
{
    margin-top: 30px;
    width: 80%;
    height: auto;
    background-color: white;
    margin-bottom: 30px ;
}

.infos
{
    margin-top: 30px;
    background-color: white;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-shadow: inset 5px 5px 15px 5px rgba(0,0,0,0.38);
    border: 5px inset #D6B389;
    padding: 15px;
}

.infoArme,.infoArmure
{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content:flex-start;
}

.infoArme,.infoArmure select
{
    width: 200px;
    height: 20px;
    
}

.close{
    width:100%;
    display: flex;
    justify-content: flex-end;
    
    
    cursor: pointer;
}


.btns
{
    width: 25px;
    height: 25px;
    background-color: transparent;
    margin-right: 5%;
    margin-top: 10px;
}

.btns:hover 
{
    color: red;
}

th
{
    background-color: grey;
}
</style>