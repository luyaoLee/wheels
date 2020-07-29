<template>
  <transition name="dialog-fade">
    <!-- click.self 防止由内部冒泡触发click -->
    <div
      class="el-dialog-wrapper"
      @click.self="handleWrapperClick"
      v-show="visible">
      <div class="el-dialog" :style="style">
        <div class="el-dialog-header">
          <slot name="title">
            <span class="el-dialog-title">{{title}}</span>
          </slot>
          <i class="close iconfont icon-close" @click="handleClose" v-if="showClose"></i>
        </div>
        <div class="el-dialog-body">
          <slot></slot>
        </div>
        <div class="el-dialog-footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import popup from '@/utils/popup'

export default {
  name: 'ElDialog',
  mixins: [popup],
  props: {
    title: String,
    width: {
      type: String,
      default: '50%'
    },
    fullScreen: {
      type: Boolean,
      default: false
    },
    top: {
      type: String,
      default: '15vh'
    },
    modal: {
      type: Boolean,
      default: true
    },
    modalAppendToBody: {
      type: Boolean,
      default: true
    },
    appendToBody: {
      type: Boolean,
      default: false
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
    customClass: String,
    closeOnClickModal: {
      type: Boolean,
      default: true
    },
    closeOnPressEscape: {
      type: Boolean,
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    },
    beforeClose: Function,
    center: {
      type: Boolean,
      default: false
    },
    destroyOnClose: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose() {
      this.$emit('update:visible', false)
    },
    handleWrapperClick() {
      if (!this.closeOnClickModal) return
      this.handleClose()
    }
  },
  computed: {
    style() {
      const style = {}
      if (this.top) {
        style.top = this.top
      }
      if (this.width) {
        style.width = this.width
      }
      return style
    }
  }
}
</script>
