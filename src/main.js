// Name: Gavin Elliott
// Date: 5/17/2021
// Assignment: FinalProject

// Code to import all of the special modules used by the app
import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// Create the router in order to transition pages properly
import VueRouter from 'vue-router'
// Grab the Nav components to add the router to
import Home from './components/Home.vue'
import Data from './components/Data.vue'
// Use the named vue-router
Vue.use(VueRouter)

//data for the router
const router = new VueRouter({
  routes: [{
      path: '/',
      component: Home
    },
    {
      path: '/data',
      component: Data
    }
  ],
  // Change the router to history mode to retain appearances
  mode: "history"
})

// I don't actually know what this does, but I'm not removing it
Vue.config.productionTip = false

// Actual rendering of the vue for the apps and calling of the router
new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')