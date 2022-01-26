// Vue et Router sont deux dépendances du package-lock.json
// Le nom de la variable importée est le mot qui se trouve plus bas dans "component"

import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home.vue";
import Footer from "./views/Footer.vue";
import Action from"./views/Action.vue";
import About from"./views/About.vue";
import Game from"./views/Game.vue";
// import Header from "./views/Header.vue";
import Rules from "./views/Rules.vue";
import RulesCard from "./views/RulesCard.vue";
import BasicRules from "./views/BasicRules.vue"
import LeftPage from "./views/LeftPage.vue";
import Life from "./views/Life.vue";
import Magic from "./views/Magic.vue";
import RightPage from "./views/RightPage.vue";
import Tableau from "./views/Tableau.vue";




Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "*",
      redirect: "/NotFound"
    },
    {
      // juste le slash ça permet de dire que ce sera cette vue qui sera envoyée par défaut
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/Action",
      name: "Action",
      component: Action
    },
    {
      path: "/About",
      name: "About",
      component: About
    },
    {
      path: "/Game",
      name: "Game",
      component: Game
    },
    
    // {
    //   path: "/action",
    //   name: "action",
    //   component: Action
    // },
  {
    path: "/Footer",
    name: "Footer",
    component: Footer
  },

  // {
  //   path: "/Header",
  //   name: "Header",
  //   component: Header
  // },

  {
    path: "/Rules",
    name: "Rules",
    component: Rules
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
    path: "/LeftPage",
    name: "LeftPage",
    component: LeftPage
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
    path: "/RightPage",
    name: "RightPage",
    component: RightPage
  },
  {
    path: "/Tableau",
    name: "Tableau",
    component: Tableau
  },



 
    // {
    //   path: "/admin",
    //   name: "admin",
    //   component: Admin
    // }
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')}
  ]
});
