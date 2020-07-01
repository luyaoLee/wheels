<template>
  <div :class="classes" ref="row"><slot></slot></div>
</template>

<script>
export default {
  name: 'ElRow',
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
    classes() {
      const { type, justify } = this
      return [
        'el-row',
        type === 'flex' ? `el-row-${type}` : '',
        justify ? `is-justify-${justify}` : ''
      ]
    }
  },
  watch: {
    gutter: {
      handler(val) {
        if (!val) return
        const gutter = Math.floor(val / 2)
        this.$nextTick(() => {
          this.$refs.row.style.cssText = `margin-left: ${-gutter}px; margin-right: ${-gutter}px;`
          this.$refs.row.children.forEach(item => {
            item.style.cssText = `padding-left: ${gutter}px; padding-right: ${gutter}px;`
          })
        })
      },
      immediate: true
    }
  }
}
</script>

<style>

</style>