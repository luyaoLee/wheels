import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElRow from './components/row'
import ElCol from './components/col'
import ElRadio from './components/radio'
import ElAlert from './components/alert'
import ElMessage from './components/message'

Vue.config.productionTip = false
Vue.use(ElRow)
Vue.use(ElCol)
Vue.use(ElRadio)
Vue.use(ElAlert)
Vue.prototype.$message = ElMessage

import './assets/scss/index.scss'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
