<template>
  <transition name="el-message-fade" @after-leave="afterLeave">
    <div
      :class="classList"
      :style="styleObj"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
      v-show="visible">

      <span>{{message}}</span>
      <i v-if="showClose" @click="close" class="close">x</i>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ElMessage',
  data() {
    return {
      visible: false,
      message: '',
      type: 'info',
      showClose: true,
      duration: 3000,
      offset: 20,
      top: 0,
      onClose: null,
      timer: null
    }
  },
  computed: {
    classList() {
      const { type } = this
      return [
        'el-message',
        type ? `el-message-${type}` : ''
      ]
    },
    styleObj() {
      return {
        top: `${this.top}px`
      }
    }
  },
  methods: {
    close() {
      this.visible = false
      this.clearTimer()
      if (typeof this.onClose === 'function') {
        this.onClose(this)
      }
    },
    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          this.close()
        }, this.duration)
      }
    },
    clearTimer() {
      if (this.duration > 0) {
        this.timer && clearTimeout(this.timer)
      }
    },
    afterLeave() {
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    }
  },
  mounted() {
    this.startTimer()
  }
}
</script>
