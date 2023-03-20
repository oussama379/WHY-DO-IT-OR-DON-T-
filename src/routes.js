import { createRouter, createWebHistory } from "vue-router";
import MainPage from "./pages/MainPage.vue";
// import RequestPage from "./pages/RequestPage.vue";
import ListRequestsPage from "./pages/ListRequestsPage.vue";
import BoxCategories from "./components/categories/BoxCategories.vue";
import SendInput from "./components/request/SendInput.vue";
import RequestPage from "./pages/RequestPage.vue";
import LoginAndRegistrationPage from "./pages/LoginAndRegistrationPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    {
      path: "/home",
      component: MainPage,
      redirect: "/home/categories",
      children: [
        {
          name: "send-input",
          path: "send-input/:categoryName",
          component: SendInput,
          props: true,
        },
        {
          name: "categories",
          path: "categories",
          component: BoxCategories,
        },
      ],
    },
    {
      name: "request-page",
      path: "/request-page",
      component: RequestPage,
    },
    {
      name: "my-requests",
      path: "/my-requests",
      component: ListRequestsPage,
    },
    {
      name: "login-register",
      path: "/login-register",
      component: LoginAndRegistrationPage,
    },
    { path: "/:pathMatch(.*)*", redirect: "/home" },
  ],
  scrollBehavior(to) {
    if (to.name === "request-result") {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }
  },
});

export default router;
