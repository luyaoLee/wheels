<template>
  <transition>
    <div class="title">
      <span>{{title}}</span>
      <slot name="title"></slot>
    </div>
    <div class="content"></div>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ElDialog',
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
  }
}
</script>
