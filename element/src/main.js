import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElRow from './components/row'
import ElCol from './components/col'

Vue.config.productionTip = false
Vue.use(ElRow)
Vue.use(ElCol)

import './assets/scss/index.scss'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
