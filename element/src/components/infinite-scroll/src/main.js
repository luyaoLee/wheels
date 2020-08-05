import { throttle } from 'utils/'
const scope = 'ElInfiniteScroll'

function onScroll(cb) {
  const { distance, vm } = this[scope]

  // scrollHeight：元素实际高度
  // scrollTop：元素滚动栏滚动距离
  // clientHeight：元素content + padding（不包括滚动条），视窗内
  // offsetHeight：元素content + padding + border（包括滚动条），视窗内
  if (this.scrollHeight - (this.scrollTop + this.clientHeight) <= distance) {
    cb.call(vm)
  }
}

export default {
  name: 'InfiniteScroll',
  inserted(el, binding, vnode) {
    const cb = binding.value
    const vm = vnode.context
    const delay = Number(el.getAttribute('infinite-scroll-delay')) || 200
    const distance = Number(el.getAttribute('infinite-scroll-distance')) || 0
    const immediate = Boolean(el.getAttribute('infinite-scroll-immediate')) || true

    const throttledScroll = throttle(onScroll.bind(el, cb), delay)
    el[scope] = { delay, distance, immediate, throttledScroll, vm }

    el.addEventListener('scroll', throttledScroll)
    if (immediate) {
      throttledScroll()
    }
  },
  unbind(el) {
    const { throttledScroll } = el[scope]
    el.removeEventListener('scroll', throttledScroll)
  }
}
