import Index from './pages/index.vue'
import Error from './pages/errors.vue'
import Time from './pages/performance.vue'
const routes = [
  { path: '/', redirect: '/index'},
  { path: '/index', component: Index },
  { path: '/error', component: Error },
  { path: '/time', component: Time }
]
export default routes