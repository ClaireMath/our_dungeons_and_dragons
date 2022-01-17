// Vue et Router sont deux dépendances du package-lock.json
// Le nom de la variable importée est le mot qui se trouve plus bas dans "component"

import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home.vue";
import NotFound from "./views/NotFound.vue";

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
      name: "Action",
      component: Action
    },
    // {
    //   path: "/action",
    //   name: "action",
    //   component: Action
    // },
  {
    path: "/NotFound",
    name: "NotFound",
    component: NotFound
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
