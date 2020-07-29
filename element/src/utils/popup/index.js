export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    visible(val) {
      if (val) {
        this.open()
      } else {
        this.close()
      }
    }
  },
  methods: {
    open() {
      const modal = document.createElement('div');
      modal.className = 'v-model'
      modal.style.zIndex = 2000
      this.$nextTick().then(() => {
        this.$el.style.zIndex = 2001
        this.$el.parentNode.appendChild(modal)
      })
    },
    close() {
      const modal = document.querySelectorAll('.v-model')[0]
      modal.className = 'v-model v-model-leave'
      let timer = setTimeout(() => {
        modal.parentNode.removeChild(modal)
        clearTimeout(timer)
        timer = null
      }, 200)
    }
  }
}