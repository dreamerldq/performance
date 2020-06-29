<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <img
      src="https://baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593424535740&di=794b6ab78773a4e4448e49bfc54fc6dd&imgtype=0&src=http%3A%2F%2Ft9.baidu.com%2Fit%2Fu%3D1307125826%2C3433407105%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D5760%26h%3D3240"
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
  request.get('/api/getname')
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
