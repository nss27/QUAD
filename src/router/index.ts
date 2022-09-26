import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import GameListPage from "@/views/GameListPage.vue";
import GamePage from "@/views/GamePage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/gameList/:gameType/:gamePersonnel/:gameLevel",
    name: "gameList",
    component: GameListPage,
  },
  {
    path: "/game/:gameId",
    component: GamePage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
