'use strict';
const MstStuffConst = require('../models/mst_stuff_const');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('mst_stuffs', {
      code: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(MstStuffConst.NAME_LENGTH)
      },
      password: {
        type: Sequelize.STRING(MstStuffConst.PASSWORD_LENGTH)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('mst_stuffs');
  }
};