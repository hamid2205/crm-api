"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class QuotationItems extends Model {
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
  QuotationItems.init(
    {
      categoryId: DataTypes.STRING,
      QuotationId: DataTypes.INTEGER,
      itemName: DataTypes.STRING,
      SST_p: DataTypes.INTEGER,
      VAT_p: DataTypes.INTEGER,
      HSN_SAC: DataTypes.INTEGER,
      GST_p: DataTypes.INTEGER,
      IGST_p: DataTypes.INTEGER,
      quantity: DataTypes.STRING,
      rate: DataTypes.STRING,
      amount: DataTypes.STRING,
      sst: DataTypes.STRING,
      vat: DataTypes.STRING,
      cgst: DataTypes.STRING,
      sgst: DataTypes.STRING,
      igst: DataTypes.STRING,
      total: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "QuotationItems",
    }
  );
  return QuotationItems;
};
