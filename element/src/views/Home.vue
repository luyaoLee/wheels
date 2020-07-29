<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div style="text-align: right;">
      <el-button @click="open">Add</el-button>
      <el-button @click="open1">Add1</el-button>
    </div>
    <el-dialog
      title="提示"
      :visible.sync="visible"
      >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="visible = false">取 消</el-button>
        <el-button  @click="visible = false" type="primary">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      test: 0,
      visible: false
    }
  },
  mounted() {
  },
  methods: {
    handleClose(e) {
      console.log(1, e)
    },
    open() {
      // this.$message('hello')
      this.visible = !this.visible
    },
    open1() {
      this.$message({
        message: 'hello world',
        type: 'error'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  height: 36px;
  line-height: 36px;
  background: cadetblue;
  border-radius: 4px;
  text-align: center;
}
</style>