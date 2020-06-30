<template>
  <div class="contianer">
    <div class="error_list">
      <el-card v-for="item in list" :key="item.id"  class="box-card">
          <p>错误描述：{{item.desc}}</p>
          <p>错误地址：{{item.url}}</p>
          <p>报错时间{{formatTime(item.createAt)}}</p>
      </el-card>
    </div>
  </div>

</template>

<script>
import dayjs from 'dayjs'
import request from "../utils/request";
export default {
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.getAllErrors();
  },
  methods: {
    formatTime(time){
       return dayjs(time).format('YYYY:MM:DD HH:mm:ss');
    },
    getAllErrors() {
      request.get("/error/getAll").then(({ data }) => {
        this.list = data.list;
      });
    }
  }
};
</script>

<style>
</style>