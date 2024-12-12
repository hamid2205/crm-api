'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Quotations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.STRING
      },
      quotationNo: {
        type: Sequelize.STRING
      },
      quotedTo: {
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
      validTill: {
        type: Sequelize.STRING
      },
      dueAmount: {
        type: Sequelize.STRING
      },
      TDSPercent: {
        type: Sequelize.STRING
      },
      TDS: {
        type: Sequelize.STRING
      },
      paymentDate: {
        type: Sequelize.STRING
      },
      taxAmount: {
        type: Sequelize.STRING
      },
      GSTIN_UIN: {
        type: Sequelize.STRING
      },
      PAN: {
        type: Sequelize.STRING
      },
      VATRecipient: {
        type: Sequelize.STRING
      },
      quotationEmail: {
        type: Sequelize.STRING
      },
      taxInvoice: {
        type: Sequelize.STRING
      },
      reverseCharges: {
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
      quotationAmount: {
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
      transporterName: {
        type: Sequelize.STRING
      },
      transportMode: {
        type: Sequelize.STRING
      },
      distance: {
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
    await queryInterface.dropTable('Quotations');
  }
};