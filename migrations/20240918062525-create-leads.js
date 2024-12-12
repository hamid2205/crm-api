'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Leads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pipeline: {
        type: Sequelize.STRING
      },
      contactName: {
        type: Sequelize.STRING
      },
      organisationName: {
        type: Sequelize.STRING
      },
      designation: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      leadSource: {
        type: Sequelize.STRING
      },
      budget: {
        type: Sequelize.STRING
      },
      subject: {
        type: Sequelize.STRING
      },
      creator: {
        type: Sequelize.STRING
      },
      assignee: {
        type: Sequelize.STRING
      },
      followUpDate: {
        type: Sequelize.STRING
      },
      lastCommentedBy: {
        type: Sequelize.STRING
      },
      whatsappLink: {
        type: Sequelize.STRING
      },
      firstResponseTime: {
        type: Sequelize.STRING
      },
      lastInternalNote: {
        type: Sequelize.STRING
      },
      nextActivity: {
        type: Sequelize.STRING
      },
      dateClosed: {
        type: Sequelize.STRING
      },
      labels: {
        type: Sequelize.STRING
      },
      duplicate: {
        type: Sequelize.STRING
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Leads');
  }
};