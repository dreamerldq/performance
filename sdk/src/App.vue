<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <img
      src="http://localhost:8888/img.png"
    />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
/*eslint-disable*/
import request from './utils/request'
import "./monitoring/error.js";

import HelloWorld from "./components/HelloWorld.vue";
// const a = 10;
// a = 200;
export default {
  name: "App",
  components: {
    HelloWorld
  },
  mounted() {
  //  const p1 =  new Promise((resolve, reject) => {
  //    reject('error')
  //   })
  // request.get('/api/hello')
  },

};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
