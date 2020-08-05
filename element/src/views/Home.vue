<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div style="text-align: right;">
      <el-button @click="open">Add</el-button>
      <el-button @click="open1">Add1</el-button>
    </div>
    <ul class="target" v-infinite-scroll="onScroll">
      <li v-for="(item, index) in count" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      test: 0,
      visible: false,
      distance: 40,
      count: 5
    }
  },
  mounted() {
  },
  methods: {
    onScroll() {
      this.count += 2
    },
    handleClose(e) {
      console.log(1, e)
    },
    open() {
      // this.$message('hello')
      this.visible = !this.visible
      console.log(this.$refs.target.offsetWidth)
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
.target {
  width: 100px;
  height: 100px;
  padding: 10px;
  border: 2px solid orangered;
  margin: 10px;
  overflow: auto;
  li {
    height: 40px;
  }
}
</style>