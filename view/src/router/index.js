import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/profile",
    name: "Profile",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/Profile.vue")
  },
  {
    path: "/project",
    name: "Project",
    component: () => import("../views/Project.vue"), 
  },
  {
    path: "/mentor",
    name: "Mentor",
    component: () => import("../views/Mentor.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () => import("../views/SignUp.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
