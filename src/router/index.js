import { createRouter, createWebHistory } from "vue-router";
import Status from "../components/Status/Status.vue";
import ErrorPage from "../pages/ErrorPage.vue";
import Sidebar from "../components/Sidebar/sidebar.vue";
import User from "../components/User/User.vue";
import hr_hold from "../components/Hr_hole/hr_hold.vue"
const routes = [
  { path: "/404", component: ErrorPage },
  {path: "/", component: Sidebar,
  children:[
    { 
    path:"/",
    name:"status", 
    component:Status 
  },
  { 
    path:"/user",
    name:"user", 
    component:User
  },
  { 
    path:"/hr",
    name:"hr", 
    component:hr_hold
  },
]
}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;