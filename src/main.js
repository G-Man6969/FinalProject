import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Data from './components/Data.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes:
  [
    {path: '/', component: Home},
    {path: '/data', component: Data}
  ],
  mode: "history"
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
