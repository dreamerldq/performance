const path = require('path')
const fs = require('fs')
const uaParser = require('ua-parser-js');
const Errors = require('../models/error')
const Times = require('../models/time')
const index = async (ctx, next) => {
  ctx.response.body = '<h1>hello world</h1>'
}
module.exports = {
  index
}