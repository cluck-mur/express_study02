'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mst_stuff extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  mst_stuff.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'mst_stuff',
  });
  return mst_stuff;
};