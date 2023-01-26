import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";
import UserView from "../views/UserView.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history", // url에 해시(#) 제거
  routes: [
    // path: url
    // component: url 타고 갔을 때 표시될 컴포넌트
    {
      path: "/",
      redirect: "/news", // 기본 페이지 설정
    },
    {
      path: "/news",
      component: NewsView,
    },
    {
      path: "/ask",
      component: AskView,
    },
    {
      path: "/jobs",
      component: JobsView,
    },
    {
      path: "/user/:name", // 다이나믹 라우트 매칭
      component: UserView,
    },
  ],
});
