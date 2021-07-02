'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tmp01 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  tmp01.init({
    name: DataTypes.STRING(15),
    password: DataTypes.STRING(32)
  }, {
    sequelize,
    modelName: 'tmp01',
  });
  return tmp01;
};