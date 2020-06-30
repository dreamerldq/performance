const Koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const app = new Koa();
const  cors = require('koa2-cors');
const homeRouter = require('./routers/index')
const timeRouter = require('./routers/index')
const errorRouter = require('./routers/error')

app.use(bodyParser());
app.use(cors());


router.get('/api/hello', async (ctx, next) => {
  var name = ctx.params.name;
  ctx.response.body = 1111
});
router.use('/', homeRouter.routes(), homeRouter.allowedMethods())
router.use('/error', errorRouter.routes(), errorRouter.allowedMethods())
router.use('/time', timeRouter.routes(), timeRouter.allowedMethods())

// add router middleware:
app.use(router.routes());

// 在端口3000监听:
app.listen(8888);
console.log('app started at port 8888...');