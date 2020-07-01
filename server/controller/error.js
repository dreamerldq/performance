const path = require('path')
const fs = require('fs')
const Errors = require('../models/error')
const Times = require('../models/time')
const { QueryTypes } = require('sequelize')
const db = require('../db')

const getAllErrors = async (ctx, next) => {
  const errors = await Errors.findAll();
  ctx.response.body = {
    data:{
      list: errors
    },
    code: 0
  }
}
const getPageErrors = async (ctx, next) => {
  const id = ctx.query.id
  const error = await Errors.findByPk(id)
  const errorUrl = error.url
  const errors = await Errors.findAll({
    where:{
      url:errorUrl
    }
  })
  const avgTime = await db.sequelize.query("select avg(firstPaintTime),avg(loadTime), avg(domReadyTime),avg(redirectTime),avg(lookupDomainTime),avg(connectSslTime),avg(connectTime),avg(requestTime),avg(domReadyTime),avg(TTFB) from times", { type: QueryTypes.SELECT});
  ctx.response.body = {
    data: {
      url: errorUrl,
      errors:errors,
      avgTime:avgTime
    },
    code: 0
  }
}
module.exports = {
  getAllErrors,
  getPageErrors
}