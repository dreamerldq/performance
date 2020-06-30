const db = require('../db');
const { Model, DataTypes, Deferrable } = require("sequelize");
const Time = db.defineModel('times', {
  firstPaintTime: {
    type: DataTypes.STRING,
    allowNull: false
  },
  loadTime: DataTypes.STRING,
  domReadyTime:DataTypes.STRING,
  redirectTime: DataTypes.STRING,
  lookupDomainTime: DataTypes.STRING,
  connectSslTime: DataTypes.STRING,
  connectTime: DataTypes.STRING,
  requestTime: DataTypes.STRING,
  TTFB: DataTypes.STRING,
  url: DataTypes.STRING,
  ip: DataTypes.STRING
});
Time.sync({ alter: true });
module.exports = Time