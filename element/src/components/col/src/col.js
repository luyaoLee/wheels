export default {
  name: 'ElCol',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    span: {
      type: Number,
      default: 24
    },
    offset: Number,
    push: Number,
    pull: Number,
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object]
  },
  computed: {
    gutter () {
      let { $parent: parent } = this
      while (parent && parent.$options.componentName !== 'ElRow') {
        parent = parent.$parent
      }
      return parent ? parent.gutter : 0
    }
  },
  render (h) {
    const style = {}
    const classList = []

    if (this.gutter) {
      style.paddingLeft = `${this.gutter / 2}px`
      style.paddingRight = style.paddingLeft
    }

    ['span', 'offset', 'push', 'pull'].forEach(prop => {
      if (this[prop] || this[prop] === 0) {
        classList.push(
          prop === 'span'
            ? `el-col-${this[prop]}`
            : `el-col-${prop}-${this[prop]}`
        )
      }
    });

    ['xs', 'sm', 'md', 'lg', 'xl'].forEach(size => {
      if (typeof this[size] === 'number') {
        classList.push(`el-col-${size}-${this[size]}`)
      } else if (typeof this[size] === 'object') {
        const props = this[size]
        Object.keys(props).forEach(prop => {
          classList.push(
            prop === 'span'
              ? `el-col-${props[prop]}`
              : `el-col-${prop}-${props[prop]}`
          )
        })
      }
    });

    return h(this.tag, {
      class: ['el-col', classList],
      style
    }, this.$slots.default)
  }
}
