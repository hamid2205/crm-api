"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class QuotationTerms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Quotations);
    }
  }
  QuotationTerms.init(
    {
      QuotationId: DataTypes.INTEGER,
      term1: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "QuotationTerms",
    }
  );
  return QuotationTerms;
};
