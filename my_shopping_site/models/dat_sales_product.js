'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dat_sales_product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.dat_sales_product.belongsTo(models.dat_sales, {
        foreignKey: 'code_sales', // dat_sales_product.code_sales のカラム名を指定する
        targetKey: 'code'          // 対応する dat_sales テーブルのカラム名を指定する
      });
      models.dat_sales_product.belongsTo(models.mst_product, {
        foreignKey: 'code_product', // dat_sales_product.code_product のカラム名を指定する
        targetKey: 'code'          // 対応する mst_product テーブルのカラム名を指定する
      });
    }
  }
  dat_sales_product.init({
    code: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    code_sales: DataTypes.INTEGER,
    code_product: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'dat_sales_product',
    freezeTableName: true,  //テーブル名をモデルと同じにする
    timestamps: false,  //タイムスタンプカラム(updatedAt, createdAt)を使用しない
  });
  dat_sales_product.removeAttribute('id');  // 'id'カラムを定義から削除
  dat_sales_product.sync();
  return dat_sales_product;
};