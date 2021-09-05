import { createRouter, createWebHashHistory } from "vue-router";
import PageHome from "../views/PageHome.vue";
import PageAbout from "../views/PageAbout.vue";
import PageLogin from "../views/PageLogin.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: PageHome,
    },
    {
      path: "/about",
      name: "About",
      component: PageAbout,
    },
    {
      path: "/login",
      name: "Login",
      component: PageLogin,
    },
  ],
});

export default router;