<template>
  <div id="app">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="index">测试首页</el-menu-item>
      <el-menu-item index="error">错误中心</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
/*eslint-disable*/
import request from "./utils/request";
import HelloWorld from "./components/HelloWorld.vue";


export default {
  name: "App",
  data() {
    return {
      activeIndex:"index"
    }
  },
  mounted() {
    const {pathname} = window.location
    this.activeIndex = pathname.split('/')[1]
  },
  methods: {
       handleSelect(key, keyPath) {
        console.log(key);
        this.$router.push(`/${key}`)

      }
  },
};
</script>

<style>
</style>



