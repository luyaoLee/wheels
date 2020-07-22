<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button @click="open">Add</button>
    <button @click="open1">Add1</button>
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
  mounted() {
  },
  methods: {
    handleClose(e) {
      console.log(1, e)
    },
    open() {
      this.$message({
        message: 'hello world',
        type: 'success'
      })
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