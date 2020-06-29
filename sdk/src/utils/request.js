import axios from "axios";
const instance = axios.create({
  baseURL: "http://127.0.0.1:8888"
});

instance.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    console.log("上报错误信息", error);
    return Promise.reject(error);
  }
);

export default instance;
