import Vue from 'vue'
import ElMessage from './message.vue'

const MessageCtor = Vue.extend(ElMessage)

let instance = null
const instances = []

const Message = function(options) {
  instance = new MessageCtor({data: options})
  let top = instance.offset
  let len = instances.length
  instances.push(instance)

  instance.$mount()
  document.body.appendChild(instance.$el)
  
  if (len > 0) {
    instances.forEach(item => {
      top += item.$el.offsetHeight + 16
    })
  }
  console.log(top)
  instance.top = top
  instance.visible = true
  
  
  return instance
}

export default Message
