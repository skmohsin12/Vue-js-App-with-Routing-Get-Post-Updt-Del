import { createWebHistory, createRouter } from "vue-router";
import HomeComp from "./components/HomeComp/HomeComp.vue";
import SignUp from "./components/SignUpComponent/SignUp.vue";
import LogIn from './components/LogIn/LogIn.vue'
import AddRest from './components/AddRestaurent/AddRest.vue'
import UpdateRest from './components/UpdateRestaurent/UpdateRest.vue'

const routes = [
  {
    name: "HomeComp",
    path: "/",
    component: HomeComp,
  },
  {
    name: "SignUp",
    path: "/signup",
    component: SignUp,
  },
  {
    name: "LogIn",
    path: "/login",
    component: LogIn,
  },
  {
    name: "AddRest",
    path: "/add_rest",
    component: AddRest,
  },
  {
    name: "UpdateRest",
    path: "/update_rest/:id",
    component: UpdateRest,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
