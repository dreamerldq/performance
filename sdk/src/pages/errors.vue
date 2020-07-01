<template>
  <div class="contianer">
    <div class="error_list">
      <el-card v-for="item in list" :key="item.id"  class="box-card">
          <p class="error_desc">错误描述：{{item.desc}}</p>
          <p @click="jumpPageDetail(item.id)" class="error_url">错误地址：{{item.url}}</p>
          <p class="error_time">报错时间{{formatTime(item.createAt)}}</p>
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
    },
    jumpPageDetail(id){
       this.$router.push({
         path:'/time',
         query:{
           id:id
         }
       })
    }
  }
};
</script>

<style lang="less" scoped>
.box-card{
  margin-top: 10px;
  .error_desc{
    font-size: 20px;
    color: #F56C6C;
  }
  .error_url{
    color:#E6A23C;
    font-size: 18px;
  }
}
</style>>
