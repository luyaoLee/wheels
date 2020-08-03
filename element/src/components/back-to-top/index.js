import ElBacktop from './src/back-to-top'

ElBacktop.install = function(Vue) {
  Vue.component(ElBacktop.name, ElBacktop)
}

export default ElBacktop