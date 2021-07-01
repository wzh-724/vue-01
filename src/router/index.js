import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/login.vue";
import Register from "../views/register.vue";
import Home from "../views/home.vue";
import Oilwear from "@/components/oilWear.vue";
import Consume from "@/components/consume.vue";
import Mine from "@/components/mine.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },

  {
    path: "/home",
    name: "Home",
    component: Home,
    redirect: "/oilWear",
    children: [
      {
        path: "/oilWear",
        name: "Oilwear",
        component: Oilwear,
      },
      {
        path: "/consume",
        name: "Consume",
        component: Consume,
      },
      {
        path: "/mine",
        name: "Mine",
        component: Mine,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
