'use strict';
const Sequelize = require('sequelize');
const datMemberConst = require('./../common/db_const/dat_member_const');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dat_member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  dat_member.init({
    code: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    date: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      // defaultValue: "DATETIME('now','localtime')",
      allowNull: false
    },
    password: DataTypes.STRING(datMemberConst.PASSWORD_LENGTH),
    name: DataTypes.STRING(datMemberConst.NAME_LENGTH),
    email: DataTypes.STRING(datMemberConst.EMAIL_LENGTH),
    postal1: DataTypes.STRING(datMemberConst.POSTAL1_LENGTH),
    postal2: DataTypes.STRING(datMemberConst.POSTAL2_LENGTH),
    address: DataTypes.STRING(datMemberConst.ADDRESS_LENGTH),
    tel: DataTypes.STRING(datMemberConst.TEL_LENGTH),
    danjo: DataTypes.INTEGER,
    born: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'dat_member',
    freezeTableName: true,  //テーブル名をモデルと同じにする
    timestamps: false,  //タイムスタンプカラム(updatedAt, createdAt)を使用しない
  });
  dat_member.removeAttribute('id');  // 'id'カラムを定義から削除
  dat_member.sync();
  return dat_member;
};