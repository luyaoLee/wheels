export function throttle(fn, wait) {
  let canRun = true
  return function() {
    if (!canRun) return
    canRun = false
    let timer = setTimeout(() => {
      canRun = true
      fn.call(this, ...arguments)
      clearTimeout(timer)
    }, wait)
  }
}
