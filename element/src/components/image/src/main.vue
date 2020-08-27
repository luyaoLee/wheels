<template>
  <div class="el-image" :style="boxStyle" @click="handler">
    <img
      :src="src"
      :alt="alt"
      @load="onLoad"
      @error="onError"
      :class="classes"
      v-show="loaded"
    />
    <slot name="placeholder" v-if="!this.loaded"></slot>
    <slot name="error" v-if="!this.loaded"></slot>
    <div class="preview" v-show="previewSrcList.length > 0">
      <img :src="previewSrcList[0]" :style="style">
      <div class="operations">
        <div @click="smaller">-</div>
        <div @click="turnLeft">Left</div>
        <div @click="turnRight">Right</div>
        <div @click="bigger">+</div>
      </div>
    </div>
  </div>
</template>

<script>
import popup from '@/utils/popup'

export default {
  name: "ElImage",
  mixins: [popup],
  data() {
    return {
      loaded: false,
      scale: 1,
      rotate: 0
    }
  },
  props: {
    src: String,
    fit: String,
    alt: String,
    lazy: {
      type: Boolean,
      default: false
    },
    scrollContainer: String,
    previewSrcList: Array,
    zIndex: Number
  },
  methods: {
    onLoad(e) {
      this.loaded = true
      this.$emit('load', e)
    },
    onError(e) {
      this.$emit('error', e)
    },
    handler(e) {
      this.$emit('click', e)
    },
    bigger() {
      this.scale += 0.1
    },
    smaller() {
      this.scale -= 0.1
    },
    turnLeft() {
      this.rotate -= 90
    },
    turnRight() {
      this.rotate += 90
    }
  },
  computed: {
    classes() {
      const { fit } = this
      return [
        fit ? `el-image-object-${fit}` : ''
      ]
    },
    boxStyle() {
      const { previewSrcList: { length } = [] } = this
      if (length > 0) {
        return {
          cursor: 'pointer'
        }
      } else {
        return {}
      }
    },
    style() {
      return {
        transform: `scale(${this.scale}) rotateZ(${this.rotate}deg)`
      }
    }
  }
}
</script>

