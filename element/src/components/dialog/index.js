import ElDialog from './src/dialog'

ElDialog.install = function(Vue) {
  Vue.component(ElDialog.name, ElDialog)
}

export default ElDialog
