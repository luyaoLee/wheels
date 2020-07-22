import ElAlert from './src/alert'

ElAlert.install = function(Vue) {
  Vue.component(ElAlert.name, ElAlert)
}

export default ElAlert
