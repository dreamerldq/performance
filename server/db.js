const { Sequelize } = require('sequelize');
const uuid = require('node-uuid');
const sequelize = new Sequelize('heavyshower', 'root', 'muse0106', {
  host: 'localhost',
  dialect: 'mysql'
});
console.log('------------------------------------');
console.log("执行数据库初始化");
console.log('------------------------------------');

function generateId() {
  return uuid.v4();
}
const ID_TYPE = Sequelize.STRING(50);

function defineModel(name, attributes) {
  var attrs = {};
  for (let key in attributes) {
    let value = attributes[key];
    if (typeof value === 'object' && value['type']) {
      value.allowNull = value.allowNull || false;
      attrs[key] = value;
    } else {
      attrs[key] = {
        type: value,
        allowNull: false
      };
    }
  }
  attrs.id = {
    type: ID_TYPE,
    primaryKey: true
  };
  attrs.createdAt = {
    type: Sequelize.BIGINT,
    allowNull: false
  };
  attrs.updatedAt = {
    type: Sequelize.BIGINT,
    allowNull: false
  };
  attrs.version = {
    type: Sequelize.BIGINT,
    allowNull: false
  };
  return sequelize.define(name, attrs, {
    tableName: name,
    timestamps: false,
    hooks: {
      beforeValidate: function (obj) {
        let now = Date.now();
        if (obj.isNewRecord) {
          if (!obj.id) {
            obj.id = generateId();
          }
          obj.createdAt = now;
          obj.updatedAt = now;
          obj.version = 0;
        } else {
          obj.updatedAt = Date.now();
          obj.version++;
        }
      }
    }
  });
}

module.exports = {
  defineModel,
  sync: () => {
    // only allow create ddl in non-production environment:
      sequelize.sync({ force: true });
  },
  sequelize
}