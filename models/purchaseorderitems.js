"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PurchaseOrderItems extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.PurchaseOrders);
    }
  }
  PurchaseOrderItems.init(
    {
      PurchaseOrderId: DataTypes.INTEGER,
      itemName: DataTypes.STRING,
      SST_p: DataTypes.INTEGER,
      VAT_p: DataTypes.INTEGER,
      HSN_SAC: DataTypes.INTEGER,
      GST_p: DataTypes.INTEGER,
      IGST_p: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      rate: DataTypes.INTEGER,
      amount: DataTypes.STRING,
      sst: DataTypes.INTEGER,
      vat: DataTypes.INTEGER,
      cgst: DataTypes.INTEGER,
      sgst: DataTypes.INTEGER,
      igst: DataTypes.INTEGER,
      total: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "PurchaseOrderItems",
    }
  );
  return PurchaseOrderItems;
};
