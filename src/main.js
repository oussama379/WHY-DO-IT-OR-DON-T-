import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import router from "./routes.js";
import { createStore } from "vuex";
import requestModule from "./state/requestModule.js";
import categoryModule from "./state/categoryModule.js";

const store = createStore({
  modules: { requestModule, categoryModule },
  state: {
    isShould: false,
  },
  mutations: {
    changeShould(state) {
      state.isShould = !state.isShould;
    },
  },
  actions: {},
  getters: {
    isShould(state) {
      return state.isShould;
    },
  },
});
const app = createApp(App);

app.use(router);
app.use(ElementPlus);
app.use(store);

app.mount("#app");
