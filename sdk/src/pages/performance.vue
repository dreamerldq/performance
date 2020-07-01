<template>
  <div class="contianer">
    <h3>{{this.url}}页面报错与性能统计</h3>
    
    <ve-histogram :data="chartData"></ve-histogram>
    <div class="error_list">
      <el-card v-for="item in errors" :key="item.id"  class="box-card">
          <p class="error_desc">错误描述：{{item.desc}}</p>
          <p  class="error_url">错误地址：{{item.url}}</p>
          <p class="error_time">报错时间{{formatTime(item.createAt)}}</p>
      </el-card>
    </div>
  </div>

</template>

<script>
import dayjs from "dayjs";
import request from "../utils/request";
export default {
  data() {
    return {
      errors: [],
      queryId: "",
      url:'',
      chartData: {
        columns: ["timeType", "耗时"],
        rows:[]
      }
    };
  },
  mounted() {
    this.queryId = window.location.href.split("?")[1].split("=")[1];
    this.getPageErrors();
  },
  methods: {
    formatTime(time) {
      return dayjs(time).format("YYYY:MM:DD HH:mm:ss");
    },
    getPageErrors() {
      request
        .get("/error/getPage", {
          params: {
            id: this.queryId
          }
        })
        .then(({ data }) => {
          // this.list = data.list;
          console.log("------------------------------------");
          console.log("AAA", data);
          console.log("------------------------------------");
          this.errors = data.errors
          this.avgTime = data.avgTime[0]
          this.url = data.url
          console.log('------------------------------------');
          console.log("aqAA", this.avgTime);
          console.log('------------------------------------');
          const rows = Object.keys(this.avgTime).map((item) => {
            return{
              timeType: item,
              '耗时': this.avgTime[item]
            }
          })
          this.$set(this.chartData, 'rows', rows)
        });
    }
  }
};
</script>

<style lang="less" scoped>
.box-card {
  margin-top: 10px;
  .error_desc {
    font-size: 20px;
    color: #f56c6c;
  }
  .error_url {
    color: #e6a23c;
    font-size: 18px;
  }
}
</style>>
