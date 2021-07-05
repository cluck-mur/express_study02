'use strict';
const mstProductConst = require('./../common/db_const/mst_product_const');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mst_product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  mst_product.init({
    code: DataTypes.INTEGER,
    name: DataTypes.STRING(mstProductConst.NAME_LENGTH),
    price: DataTypes.INTEGER,
    gazou: DataTypes.STRING(mstProductConst.GAZOU_LENGTH)
  }, {
    sequelize,
    modelName: 'mst_product',
    freezeTableName: true,  //テーブル名をモデルと同じにする
    timestamps: false,  //タイムスタンプカラム(updatedAt, createdAt)を使用しない
  });
  mst_product.removeAttribute('id');  // 'id'カラムを定義から削除
  return mst_product;
};