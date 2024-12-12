'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PurchaseOrderItems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      purchaseOrderId: {
        type: Sequelize.INTEGER
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
        type: Sequelize.INTEGER
      },
      rate: {
        type: Sequelize.INTEGER
      },
      amount: {
        type: Sequelize.STRING
      },
      sst: {
        type: Sequelize.INTEGER
      },
      vat: {
        type: Sequelize.INTEGER
      },
      cgst: {
        type: Sequelize.INTEGER
      },
      sgst: {
        type: Sequelize.INTEGER
      },
      igst: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('PurchaseOrderItems');
  }
};