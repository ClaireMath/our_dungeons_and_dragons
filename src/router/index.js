import Vue from 'vue'
import VueRouter from 'vue-router'
import Action from '../views/Action.vue'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
import About from '../views/About.vue'
import Game from '../views/Game.vue'

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
  path: "/notfound",
  name: "NotFound",
  component: NotFound
},
{
  path: "/about",
  name: "About",
  component: About
},

{
  path: "/RulesCard",
  name: "RulesCard",
  component: RulesCard
},

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
