import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import axios from 'axios'
Vue.prototype.$http = axios
import './common/stylus/index.styl'

Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
