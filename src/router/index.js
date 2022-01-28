import Vue from 'vue'
import VueRouter from 'vue-router'
import Action from '../views/Action.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Game from '../views/Game.vue'
import BasicRules from "../views/BasicRules.vue"
import RulesCard from '../views/RulesCard.vue'
import Life from "../views/Life.vue"
import Magic from "../views/Magic.vue"
import Rules from "../views/Rules.vue"
import Tableau from "../views/Tableau.vue"
import Dream from "../views/Dream.vue"

Vue.use(VueRouter)

const routes = [
   {
     // le slash permet de renvoyer à la racine du projet
    path: "/",
    name: "Home",
    component: Home
  },
  {
    
    path: "/action/:id",
    name: "Action",
    component: Action
  },

  {
    path: "/dream/:id",
    name: "Dream",
    component: Dream
  },

  {
    path: "/game/:id",
    name: "Game",
    component: Game
  },

{
  path: "/About",
  name: "About",
  component: About
},
{
  path: "/Tableau",
  name: "Tableau",
  component: Tableau
},

{
  path: "/RulesCard",
  name: "RulesCard",
  component: RulesCard
},

{
  path: "/BasicRules",
  name: "BasicRules",
  component: BasicRules
},

{
  path: "/Life",
  name: "Life",
  component: Life
},

{
  path: "/Magic",
  name: "Magic",
  component: Magic
},

{
  path: "/Rules",
  name: "Rules",
  component: Rules
},

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
