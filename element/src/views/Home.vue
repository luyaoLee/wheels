<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <el-tag
      :closable="true"
      color="rgba(64,158,255,.1)"
      :disable-transitions="false"
      @close="handleClose"
    >button</el-tag>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import ElTag from '@/components/tag'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    ElTag
  },
  methods: {
    handleClose(e) {
      console.log(e)
    }
  }
}
</script>
