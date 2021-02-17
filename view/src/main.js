import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import Buefy from "buefy";
import "buefy/dist/buefy.css";

Vue.use(Buefy);
//Vue.prototype.$http = axios;np
//Vue.config.productionTip = false;
// Vue.prototype.$axios = axios;
Vue.use(VueAxios, axios);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
