<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <el-row :gutter="40">
      <el-col :span="4">
        <div class="item">Item</div>
      </el-col>
      <el-col :span="16">
        <div class="item">Item</div>
      </el-col>
      <el-col :span="4">
        <div class="item">Item</div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="20">
        <div class="item">Item</div>
      </el-col>
      <el-col :span="4">
        <div class="item">Item</div>
      </el-col>
    </el-row>
    <el-row :gutter="30">
      <el-col :span="4">
        <div class="item">Item</div>
      </el-col>
      <el-col :span="4" :offset="8">
        <div class="item">Item</div>
      </el-col>
      <el-col :span="4">
        <div class="item">Item</div>
      </el-col>
      <el-col :span="4">
        <div class="item">Item</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
    }
  },
  components: {
  },
  methods: {
    handleClose(e) {
      console.log(e)
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