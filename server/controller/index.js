const path = require('path')
const fs = require('fs')
const uaParser = require('ua-parser-js');
const Errors = require('../models/error')
const Times = require('../models/time')
const index = async (ctx, next) => {
  ctx.response.body = '<h1>hello world</h1>'
}
const gif = async (ctx, next) => {
  let { error, data,ts } = ctx.query;
  
  // const agent = JSON.stringify(uaParser(ctx.request.headers['user-agent']))
  const   url = ctx.request.headers['referer']   //来源地址
  const  ip = ctx.request.ip;
  const obj = {  url, ip };
  
  if (error) {     //处理错误
    const errorInfoObj = Object.assign(JSON.parse(error), obj);
    try {
      const errorObj = await Errors.create({ ...errorInfoObj });
      const GIF_URL = path.resolve(__dirname, "../public/images/blank.gif");
      ctx.body = fs.readFileSync(GIF_URL);    //空白gif图
    } catch (error) {
      ctx.body = error    //空白gif图
    }
   
  }
  if (data) {      //处理性能
   const  timeInfoObj = Object.assign(JSON.parse(data), obj);
    try {
      const timeObj = await Times.create({ ...timeInfoObj });
      const GIF_URL = path.resolve(__dirname, "../public/images/blank.gif");
      ctx.body = fs.readFileSync(GIF_URL);    //空白gif图
    } catch (error) {
      ctx.body = error    //空白gif图
    }
  }

}
module.exports = {
  index,
  gif
}