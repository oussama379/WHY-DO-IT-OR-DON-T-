import { createRouter, createWebHistory } from "vue-router";
import MainPage from "./pages/MainPage.vue";
// import RequestPage from "./pages/RequestPage.vue";
import ListRequestsPage from "./pages/ListRequestsPage.vue";
import BoxCategories from "./components/categories/BoxCategories.vue";
import SendInput from "./components/request/SendInput.vue";

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
          path: "send-input/:category",
          component: SendInput,
        },
        {
          name: "categories",
          path: "categories",
          component: BoxCategories,
        },
      ],
    },

    {
      name: "myrequest",
      path: "/my-requests",
      component: ListRequestsPage,
    },
    { path: "/:pathMatch(.*)*", redirect: "/home" },
  ],
});

export default router;
