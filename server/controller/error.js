const path = require('path')
const fs = require('fs')
const Errors = require('../models/error')


const getAllErrors = async (ctx, next) => {
  const errors = await Errors.findAll();
  console.log('------------------------------------');
  console.log("ERRORS",errors);
  console.log('------------------------------------');
  ctx.response.body = {
    data:{
      list: errors
    },
    code: 0
  }
}
module.exports = {
  getAllErrors
}