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
    await queryInterface.removeColumn("QuotationTerms", "term2");
    await queryInterface.removeColumn("QuotationTerms", "term3");
    await queryInterface.removeColumn("QuotationTerms", "term4");
    await queryInterface.removeColumn("QuotationTerms", "term5");
    await queryInterface.removeColumn("QuotationTerms", "term6");
    await queryInterface.removeColumn("QuotationTerms", "term7");
    await queryInterface.removeColumn("QuotationTerms", "term8");
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
