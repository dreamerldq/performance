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
      <el-menu-item index="time">性能分析</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
/*eslint-disable*/
import request from "./utils/request";
import HeavyShower from "./monitoring/error";
import HelloWorld from "./components/HelloWorld.vue";
window.heavy = new HeavyShower("http://localhost:8888");

export default {
  name: "App",
  data() {
    return {
      activeIndex:"index"
    }
  },
  mounted() {},
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
