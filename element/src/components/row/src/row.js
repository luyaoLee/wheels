export default {
  name: 'ElRow',
  componentName: 'ElRow',
  props: {
    gutter: {
      type: Number,
      default: 0
    },
    type: String,
    justify: {
      type: String,
      default: 'start'
    },
    align: {
      type: String,
      default: 'top'
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
  computed: {
    style() {
      const ret = {}

      if (this.gutter) {
        ret.marginLeft = `-${this.gutter / 2}px`
        ret.marginRight = ret.marginLeft
      }

      return ret
    }
  },
  render (h) {
    const { type, justify, align, tag, style } = this
    
    return h(tag, {
      class: [
        'el-row',
        justify !== 'start' ? `is-justify-${justify}` : '',
        align !== 'top' ? `is-align-${align}` : '',
        { 'el-row-flex': type === 'flex' }
      ],
      style
    }, this.$slots.default)
  }
}