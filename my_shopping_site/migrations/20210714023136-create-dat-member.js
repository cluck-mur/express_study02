'use strict';
const datMemberConst = require('./../common/db_const/dat_member_const');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('dat_members', {
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
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        // defaultValue: "DATETIME('now','localtime')",
        allowNull: false
      },
      password: {
        type: Sequelize.STRING(datMemberConst.PASSWORD_LENGTH)
      },
      name: {
        type: Sequelize.STRING(datMemberConst.NAME_LENGTH)
      },
      email: {
        type: Sequelize.STRING(datMemberConst.EMAIL_LENGTH)
      },
      postal1: {
        type: Sequelize.STRING(datMemberConst.POSTAL1_LENGTH)
      },
      postal2: {
        type: Sequelize.STRING(datMemberConst.POSTAL2_LENGTH)
      },
      address: {
        type: Sequelize.STRING(datMemberConst.ADDRESS_LENGTH)
      },
      tel: {
        type: Sequelize.STRING(datMemberConst.TEL_LENGTH)
      },
      danjo: {
        type: Sequelize.INTEGER
      },
      born: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('dat_members');
  }
};