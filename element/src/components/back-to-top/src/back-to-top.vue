<template>
  <transition name="el-fade-in">
    <div
      v-if="visible"
      @click.stop="handleClick"
      :style="style"
      class="el-back-top">
      <slot>
        <i>up</i>
      </slot>
    </div>
  </transition>
</template>

<script>
import { throttle } from 'utils/';

const DURATION = 500

const cubic = value => Math.pow(value, 3);
const easeInOutCubic = value => value < 0.5
  ? cubic(value * 2) / 2
  : 1 - cubic((1 - value) * 2) / 2;

export default {
  name: 'ElBacktop',
  data() {
    return {
      visible: false,
      el: null,
      container: null
    }
  },
  props: {
    target: String,
    visibilityHeight: {
      type: Number,
      default: 200
    },
    right: {
      type: Number,
      default: 40
    },
    bottom: {
      type: Number,
      default: 40
    }
  },
  mounted() {
    this.init()
    this.throtteldScrollHandler = throttle(this.onScroll, 300)
    this.container.addEventListener('scroll', this.throtteldScrollHandler)
  },
  computed: {
    style() {
      return {
        right: `${this.right}px`,
        bottom: `${this.bottom}px`
      }
    }
  },
  methods: {
    init() {
      this.container = document
      this.el = document.documentElement
      if (this.target) {
        this.el = document.querySelector(this.target)
        if (!this.target) {
          throw new Error(`target is not existed: ${this.target}`)
        }
        this.container = this.el
      }
    },
    onScroll() {
      const scrollTop = this.el.scrollTop
      this.visible = scrollTop >= this.visibilityHeight
    },
    scrollToTop() {
      const el = this.el;
      const beginTime = Date.now();
      const beginValue = el.scrollTop;
      const rAF = window.requestAnimationFrame || (func => setTimeout(func, 16));
      const frameFunc = () => {
        // 设置滚动时间
        const progress = (Date.now() - beginTime) / DURATION;
        if (progress < 1) {
          el.scrollTop = beginValue * (1 - easeInOutCubic(progress));
          rAF(frameFunc);
        } else {
          el.scrollTop = 0;
        }
      };
      rAF(frameFunc);
    },
    handleClick(e) {
      this.scrollToTop()
      this.$emit('click', e)
    }
  },
  beforeDestroy() {
    this.container.removeEventListener('scroll', this.throtteldScrollHandler)
  }
}
</script>
