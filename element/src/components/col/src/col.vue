<template>
  <div :class="classes"><slot></slot></div>
</template>

<script>
export default {
  name: 'ElCol',
  props: {
    span: {
      type: Number,
      default: 24
    },
    offset: Number
  },
  computed: {
    classes () {
      const { span, offset } = this
      return [
        'el-col',
        span ? `el-col-${span}` : '',
        offset ? `el-col-offset-${offset}` : ''
      ]
    }
  }
}
</script>

<style>

</style>