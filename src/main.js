import 'bable-polyfill'
import Vue from 'vue'
import App from './App'
//import router from './router'
import fastclick from 'fastclick'

//Vue.config.productionTip = false

fastclick.attach(document.body)

import 'common/stylus/index.styl'

new Vue({
  el: '#app',   
  render: h => h(App)
})
