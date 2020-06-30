import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:8888"
});

instance.interceptors.response.use(
  function(response) {
    if(response.status === 200){
      return response.data;
    }
    
  },
  function(error) {
    console.log("上报错误信息", error);
    return Promise.reject(error);
  }
);

export default instance;
