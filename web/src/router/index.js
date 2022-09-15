import { createRouter, createWebHistory } from 'vue-router'
import PkMainView from "../views/pk/PkMainView";
import RanklistMainView from "../views/ranklist/RanklistMainView";
import RecordMainView from "../views/record/RecordMainView";
import UserBotMainView from "../views/user/bot/UserBotMainView";
import NotFoundView from "../views/error/NotFoundView";

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/pk/",
  },
  {
    path: "/pk/",
    name:  "pk_main",
    component: PkMainView,
  },
  {
    path: "/record/",
    name:  "record_main",
    component: RecordMainView,
  },
  {
    path: "/ranklist/",
    name:  "ranklist_main",
    component: RanklistMainView,
  },
  {
    path: "/user/bot/",
    name:  "user_bot_main",
    component: UserBotMainView,
  },
  {
    path: "/404/",
    name:  "404",
    component: NotFoundView,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404/",
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
