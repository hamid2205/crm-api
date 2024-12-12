'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('QuotationTerms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quotationId: {
        type: Sequelize.INTEGER
      },
      term1: {
        type: Sequelize.STRING
      },
      term2: {
        type: Sequelize.STRING
      },
      term3: {
        type: Sequelize.STRING
      },
      term4: {
        type: Sequelize.STRING
      },
      term5: {
        type: Sequelize.STRING
      },
      term6: {
        type: Sequelize.STRING
      },
      term7: {
        type: Sequelize.STRING
      },
      term8: {
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
    await queryInterface.dropTable('QuotationTerms');
  }
};