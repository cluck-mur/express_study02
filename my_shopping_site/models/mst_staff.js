'use strict';
const {
  Model
} = require('sequelize');
const mstStaffConst = require('./mst_staff_const');

module.exports = (sequelize, DataTypes) => {
  class mst_staff extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  mst_staff.init({
    name: DataTypes.STRING(mstStaffConst.NAME_LENGTH),
    password: DataTypes.STRING(mstStaffConst.PASSWORD_LENGTH)
  }, {
    sequelize,
    modelName: 'mst_staff',
  });
  return mst_staff;
};