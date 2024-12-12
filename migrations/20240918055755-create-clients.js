'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Clients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      logo: {
        type: Sequelize.STRING
      },
      businessName: {
        type: Sequelize.STRING
      },
      industry: {
        type: Sequelize.STRING
      },
      businessGSTIN: {
        type: Sequelize.STRING
      },
      businessPAN: {
        type: Sequelize.STRING
      },
      clientType: {
        type: Sequelize.STRING
      },
      taxTreatment: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      zipCode: {
        type: Sequelize.STRING
      },
      street: {
        type: Sequelize.STRING
      },
      shippingName: {
        type: Sequelize.STRING
      },
      shippingCountry: {
        type: Sequelize.STRING
      },
      shippingState: {
        type: Sequelize.STRING
      },
      shippingCity: {
        type: Sequelize.STRING
      },
      shippingZipCode: {
        type: Sequelize.STRING
      },
      shippingStreet: {
        type: Sequelize.STRING
      },
      businessAliasName: {
        type: Sequelize.STRING
      },
      uniqueKey: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phoneNumber: {
        type: Sequelize.STRING
      },
      attachments: {
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
    await queryInterface.dropTable('Clients');
  }
};