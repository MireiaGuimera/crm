import Vue from 'vue'
import Vuetify from 'vuetify'
import Axios from 'axios'
import App from './App.vue'
import VueRouter from 'vue-router'
import { rutas } from './rutas.js'

import '../node_modules/vuetify/dist/vuetify.min.css'

Vue.use(VueRouter)
Vue.use(Vuetify)
Vue.use(Axios)

const enrutador = new VueRouter({
  routes: rutas,
  mode: 'history'
})

new Vue({
  el: '#app',
  router: enrutador,
  render: h => h(App)
})
