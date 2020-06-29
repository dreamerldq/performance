const Koa = require('koa');

// 注意require('koa-router')返回的是函数:
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const app = new Koa();
const  cors = require('koa2-cors');

app.use(bodyParser());
app.use(cors());
// log request URL:
app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  await next();
});

// add url-route:
router.get('/api/hello', async (ctx, next) => {
  console.log('------------------------------------');
  console.log("AA");
  console.log('------------------------------------');
  var name = ctx.params.name;
  ctx.response.body = 1111
});

router.get('/', async (ctx, next) => {
  ctx.response.body = '<h1>Index</h1>';
});

// add router middleware:
app.use(router.routes());

// 在端口3000监听:
app.listen(8888);
console.log('app started at port 8888...');