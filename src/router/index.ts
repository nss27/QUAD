import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import HomePage from "@/views/HomePage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/gameList/:gameType/:gamePersonnel/:gameLevel",
    name: "gameList",
    component: () => import("@/views/GameListPage.vue"),
  },
  {
    path: "/game/:gameId",
    name: "game",
    component: () => import("@/views/GamePage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
