<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <el-alert title="sd" @close="handleClose"></el-alert>
    <el-alert title="sd1" type="success" close-text="I konw" :closable="false"></el-alert>
    <el-alert title="sd2" type="warning"></el-alert>
    <el-alert title="sd3" type="error"></el-alert>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      test: 0
    }
  },
  components: {
  },
  methods: {
    handleClose(e) {
      console.log(1, e)
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