import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home"
import Login from "@/components/Login"

const router = createRouter({
  history : createWebHistory(),
  routes : [ // path별 component를 추가한다.
      { path : "/", name : "home", component : Home },
      { path : "/Login", name : "login", component : Login },
  ]
});
  
export default router;

