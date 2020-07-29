<template>
  <button :class="classList" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ElButton',
  props: {
    type: String
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    }
  },
  computed: {
    classList() {
      const { type } = this
      return [
        'el-button',
        type ? `el-button-${type}`: ''
      ]
    }
  }
}
</script>
