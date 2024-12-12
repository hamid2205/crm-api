"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.addColumn("clients", "createdBy", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("vendors", "createdBy", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("leads", "createdBy", {
      type: Sequelize.STRING,
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
