<template>
  <div>
    <div class="el-message-box-wrapper">
      <div class="el-message-box">
        <div class="el-message-header">
          <div class="title">
            <span>{{title}}</span>
          </div>
          <span class="close">x</span>
        </div>
        <div class="el-message-content">
          <div class="el-message-content-box"></div>
          <div class="el-message-input-box"></div>
        </div>
        <div class="el-message-btns">
          <button type="button">{{cancelButtonText}}</button>
          <button type="button">{{confirmButtonText}}</button>
        </div>
      </div>
    </div>
    <div class="v-model"></div>
  </div>
</template>

<script>
export default {
  name: 'ElMessageBox',
  data() {
    return {
      title: 'hello world',
      message: '',
      callback: null,
      showClose: true,
      beforeClose: null,
      dangerouslyUseHTMLString: false,
      lockScroll: true,
      showCancelButton: false,
      showConfirmButton: true,
      cancelButtonText: '取消',
      confirmButtonText: '确定',
      closeOnClickModal: true,
      closeOnPressEscape: true,
      showInput: false,
      inputPlaceholder: '',
      inputType: 'text',
      inputValue: '',
      inputPattern: null,
      inputValidator: null,
      inputErrorMessage: '',
      roundButton: false,
      center: false
    }
  }
}
</script>

