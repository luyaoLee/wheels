<template>
  <label>
    <span></span>
    <input
      type="radio"
      :value="label"
      @change="onChange">
    <span>
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'ElRadio',
  componentName: 'ElRadio',
  props: {
    label: [String, Number, Boolean],
    disabled: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    },
    size: String,
    name: String
  },
  methods: {
    onChange(e) {
      this.$emit('change', e)
      console.log(e)
    }
  }
}
</script>
