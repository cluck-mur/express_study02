'use strict';
const mstStaffConst = require('./../common/db_const/mst_staff_const');

const {
  Model
} = require('sequelize');
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
    code: DataTypes.INTEGER,
    name: DataTypes.STRING(mstStaffConst.NAME_LENGTH),
    password: DataTypes.STRING(mstStaffConst.PASSWORD_LENGTH)
  }, {
    sequelize,
    modelName: 'mst_staff',
    freezeTableName: true,  //テーブル名をモデルと同じにする
  });
  mst_staff.removeAttribute('id');  // 'id'カラムを定義から削除
  return mst_staff;
};