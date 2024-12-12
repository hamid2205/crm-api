'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PurchaseOrders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.STRING
      },
      PONo: {
        type: Sequelize.STRING
      },
      vendor: {
        type: Sequelize.STRING
      },
      currency: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      supplyPlace: {
        type: Sequelize.STRING
      },
      convertPO: {
        type: Sequelize.STRING
      },
      taxAmount: {
        type: Sequelize.STRING
      },
      GSTIN_UINRecipient: {
        type: Sequelize.STRING
      },
      PAN: {
        type: Sequelize.STRING
      },
      VATRecipient: {
        type: Sequelize.STRING
      },
      vendorEmail: {
        type: Sequelize.STRING
      },
      amountDue: {
        type: Sequelize.STRING
      },
      subTotal: {
        type: Sequelize.STRING
      },
      discount: {
        type: Sequelize.STRING
      },
      taxableValue: {
        type: Sequelize.STRING
      },
      HSN_SACList: {
        type: Sequelize.STRING
      },
      POAmount: {
        type: Sequelize.STRING
      },
      additionalCharges: {
        type: Sequelize.STRING
      },
      createdBy: {
        type: Sequelize.STRING
      },
      tags: {
        type: Sequelize.STRING
      },
      transactionCharge: {
        type: Sequelize.STRING
      },
      VATRate: {
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
    await queryInterface.dropTable('PurchaseOrders');
  }
};