<template>
  <transition name="el-alert-fade">
    <div :class="classList" v-if="visible">
      <span>{{title}}</span>
      <i class="close" @click="close">{{closeInnerText}}</i>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ElAlert',
  componentName: 'ElAlert',
  data() {
    return {
      visible: true
    }
  },
  props: {
    title: String,
    type: {
      type: String,
      default: 'info'
    },
    closable: {
      type: Boolean,
      default: true
    },
    center: {
      type: Boolean,
      default: true
    },
    'close-text': String
  },
  methods: {
    close() {
      if (!this.closable) return
      this.visible = false
      this.$emit('close')
    }
  },
  computed: {
    classList() {
      const { type } = this
      return [
        'el-alert',
        type ? `el-alert-${type}` : ''
      ]
    },
    closeInnerText() {
      return this.closeText ? this.closeText : 'x'
    }
  }
}
</script>
