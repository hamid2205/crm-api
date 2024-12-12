'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('QuotationItems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      categoryId: {
        type: Sequelize.STRING
      },
      quotationId: {
        type: Sequelize.STRING
      },
      itemName: {
        type: Sequelize.STRING
      },
      SST_p: {
        type: Sequelize.INTEGER
      },
      VAT_p: {
        type: Sequelize.INTEGER
      },
      HSN_SAC: {
        type: Sequelize.INTEGER
      },
      GST_p: {
        type: Sequelize.INTEGER
      },
      IGST_p: {
        type: Sequelize.INTEGER
      },
      quantity: {
        type: Sequelize.STRING
      },
      rate: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.STRING
      },
      sst: {
        type: Sequelize.STRING
      },
      vat: {
        type: Sequelize.STRING
      },
      cgst: {
        type: Sequelize.STRING
      },
      sgst: {
        type: Sequelize.STRING
      },
      igst: {
        type: Sequelize.STRING
      },
      total: {
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
    await queryInterface.dropTable('QuotationItems');
  }
};