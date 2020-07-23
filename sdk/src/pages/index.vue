
<template>
  <div>
    <el-button @click="testScriptError">script异常测试</el-button>
    <el-button @click="testApiError">Api异常测试</el-button>
    <el-button @click="testResourceError">资源请求异常测试</el-button>

    <img
      v-if="imageUrl"
      :src="imageUrl"
    />
  </div>
</template>

<script>
/*eslint-disable*/
import request from "../utils/request";
export default {
  data() {
    return {
      imageUrl: ""
    };
  },
  methods: {
    testScriptError() {
      const a = 10;
      a = 100;
    },
    testApiError() {
      const p1 = new Promise((resolve, reject) => {
        reject("error");
      });
      request.get("/api/hello");
    },
    testResourceError(){
      this.imageUrl = "http://localhost:8888/img.png"
    }
  }
};
</script>

<style>
</style>










