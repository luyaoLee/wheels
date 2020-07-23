import Vue from 'vue'
import ElMessage from './message.vue'

const MessageCtor = Vue.extend(ElMessage)

let instance = null
const instances = []
let seed = 1

const Message = function(options = {}) {
  if (typeof options === 'string') {
    options = {
      message: options
    }
  }

  // 保存用户自定义的close回调函数
  let userOnclose = options.onClose
  let id = 'message_' + seed++


  options.onClose = function() {
    Message.close(id, userOnclose)
  }

  instance = new MessageCtor({data: options})
  instance.id = id

  instance.$mount()
  document.body.appendChild(instance.$el)

  let top = options.offset || 20
  instances.forEach(item => {
    top += item.$el.offsetHeight + 16
  })
  
  instance.top = top
  instance.visible = true
  
  instances.push(instance)
  return instance
}

Message.close = function(id, userOnclose) {
  let len = instances.length
  let removedHeight = 0
  let index = -1

  for (let i = 0; i < len; i++) {
    if (id === instances[i].id) {
      removedHeight = instances[i].$el.offsetHeight
      index = i

      if (typeof userOnclose === 'function') {
        userOnclose(instances[i])
      }

      instances.splice(i, 1)
      break
    }
  }
  
  if (len <= 1 || index === -1 || index > instances.length - 1) return;
  for (let i = index; i < len - 1 ; i++) {
    let dom = instances[i].$el;
    dom.style['top'] = parseInt(dom.style['top'], 10) - removedHeight - 16 + 'px';
  }

}

export default Message
