/*eslint-disable*/
import Vue from "vue";
import App from "./App.vue";
import VueRouter from 'vue-router'
import routes from './routers'
import ElementUI from 'element-ui';
import VCharts from 'v-charts'
import HeavyShower, {handleError, formatRuntimerError} from "./monitoring/error";
window.heavy = new HeavyShower("http://localhost:8888");
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.errorHandler = (err, vm, info) => {
  let { message, name, script, line, column, stack } = err;
  handleError(formatRuntimerError(message, name, line, column))
}
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
