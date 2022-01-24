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

Vue.use(VueRouter)

const routes = [
   {
     // juste le slash ça permet de dire que ce sera cette vue qui sera envoyée par défaut
    path: "/",
    name: "Home",
    component: Home
  },
  {
    // juste le slash ça permet de dire que ce sera cette vue qui sera envoyée par défaut
    path: "/action/:id",
    name: "Action",
    component: Action
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
