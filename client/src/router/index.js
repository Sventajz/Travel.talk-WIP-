import { createRouter, createWebHistory } from "vue-router";
import App from "../App.vue";

const routes = [
  //   {
  //     path: "/",
  //     name: "App",
  //     component: () => import("../components/HelloWorld.vue"),
  //   },
  {
    path: "/app",
    name: "app",
    component: App,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
