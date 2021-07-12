'use strict';
const datSalesConst = require('./../common/db_const/dat_sales_const');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('dat_sales', {
      // id: {
      //   allowNull: false,
      //   autoIncrement: true,
      //   primaryKey: true,
      //   type: Sequelize.INTEGER
      // },
      code: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      code_member: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(datSalesConst.NAME_LENGTH)
      },
      email: {
        type: Sequelize.STRING(datSalesConst.EMAIL_LENGTH)
      },
      postal1: {
        type: Sequelize.STRING(datSalesConst.POSTAL1_LENGTH)
      },
      postal2: {
        type: Sequelize.STRING(datSalesConst.POSTAL2_LENGTH)
      },
      address: {
        type: Sequelize.STRING(datSalesConst.ADDRESS_LENGTH)
      },
      tel: {
        type: Sequelize.STRING(datSalesConst.TEL_LENGTH)
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
    await queryInterface.dropTable('dat_sales');
  }
};