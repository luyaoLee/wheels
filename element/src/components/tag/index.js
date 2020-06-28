import ElTag from './src/tag'

// 支持全局安装
ElTag.install = function(Vue) {
    Vue.component(ElTag.name, ElTag)
}

export default ElTag