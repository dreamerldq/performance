const Router = require('koa-router')
const home = new Router()
const homeController = require('../controller/index')
home.get('/', homeController.index)
home.get('pa.gif', homeController.gif)
module.exports = home
