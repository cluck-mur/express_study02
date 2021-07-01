'use strict';
const mstStaffConst = require('../models/mst_staff_const');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('mst_staff', {
      code: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(mstStaffConst.NAME_LENGTH)
      },
      password: {
        type: Sequelize.STRING(mstStaffConst.PASSWORD_LENGTH)
      },
      // createdAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // },
      // updatedAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('mst_staffs');
  }
};