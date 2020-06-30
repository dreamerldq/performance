const db = require('../db');
const { Model, DataTypes, Deferrable } = require("sequelize");
const Error = db.defineModel('errors', {
  type: DataTypes.STRING,
  desc: DataTypes.STRING,
  url: DataTypes.STRING,
  ip: DataTypes.STRING,
  position: DataTypes.STRING,
});
Error.sync({ alter: true });
module.exports = Error