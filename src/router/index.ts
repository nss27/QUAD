import { createRouter, createWebHistory } from "@ionic/vue-router";
import { createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomePage from "@/views/HomePage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/gameList",
    name: "gameList",
    component: () => import("@/views/GameListPage.vue"),
  },
  {
    path: "/game",
    name: "game",
    component: () => import("@/views/GamePage.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
