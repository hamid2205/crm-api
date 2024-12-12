'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProformaInvoices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.STRING
      },
      PINo: {
        type: Sequelize.STRING
      },
      billedTo: {
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
      nextScheduledDate: {
        type: Sequelize.STRING
      },
      dueDate: {
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
      GSTIN_UINRecipient: {
        type: Sequelize.STRING
      },
      PAN: {
        type: Sequelize.STRING
      },
      VATRecipient: {
        type: Sequelize.STRING
      },
      PIEmail: {
        type: Sequelize.STRING
      },
      taxInvoice: {
        type: Sequelize.STRING
      },
      amountPaid: {
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
      PIAmount: {
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
    await queryInterface.dropTable('ProformaInvoices');
  }
};