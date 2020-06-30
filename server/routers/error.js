const Router = require('koa-router')
const error = new Router()
const errorController = require('../controller/error')


error.get('/getAll', errorController.getAllErrors)

module.exports = error