import Vue from "vue";
import App from "./App.vue";
import VueRouter from 'vue-router'
import routes from './routers'
import ElementUI from 'element-ui';
import VCharts from 'v-charts'
import 'element-ui/lib/theme-chalk/index.css';
const router = new VueRouter({
  mode: 'history',
  routes 
})
Vue.use(ElementUI)
Vue.use(VCharts)
Vue.use(VueRouter)
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
