'use strict';
const Sequelize = require('sequelize');
const datSalesConst = require('./../common/db_const/dat_sales_const');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dat_sales extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  dat_sales.init({
    // code: DataTypes.INTEGER,
    code: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    // date: DataTypes.DATE,
    date: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      // defaultValue: "DATETIME('now','localtime')",
      allowNull: false
    },
    code_member: DataTypes.INTEGER,
    name: DataTypes.STRING(datSalesConst.NAME_LENGTH),
    email: DataTypes.STRING(datSalesConst.EMAIL_LENGTH),
    postal1: DataTypes.STRING(datSalesConst.POSTAL1_LENGTH),
    postal2: DataTypes.STRING(datSalesConst.POSTAL2_LENGTH),
    address: DataTypes.STRING(datSalesConst.ADDRESS_LENGTH),
    tel: DataTypes.STRING(datSalesConst.TEL_LENGTH)
  }, {
    sequelize,
    modelName: 'dat_sales',
    freezeTableName: true,  //テーブル名をモデルと同じにする
    timestamps: false,  //タイムスタンプカラム(updatedAt, createdAt)を使用しない
  });
  dat_sales.removeAttribute('id');  // 'id'カラムを定義から削除
  return dat_sales;
};