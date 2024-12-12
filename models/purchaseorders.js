"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PurchaseOrders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.PurchaseOrderItems);
      this.hasMany(models.PurchaseOrderTerms);
      this.belongsTo(models.Vendors);
      this.belongsTo(models.CompanyProfile);
    }
  }
  PurchaseOrders.init(
    {
      date: DataTypes.STRING,
      PONo: DataTypes.STRING,
      vendor: DataTypes.STRING,
      currency: DataTypes.STRING,
      amount: DataTypes.STRING,
      status: DataTypes.STRING,
      supplyPlace: DataTypes.STRING,
      convertPO: DataTypes.STRING,
      taxAmount: DataTypes.STRING,
      GSTIN_UINRecipient: DataTypes.STRING,
      PAN: DataTypes.STRING,
      VATRecipient: DataTypes.STRING,
      vendorEmail: DataTypes.STRING,
      amountDue: DataTypes.STRING,
      subTotal: DataTypes.STRING,
      discount: DataTypes.STRING,
      taxableValue: DataTypes.STRING,
      HSN_SACList: DataTypes.STRING,
      POAmount: DataTypes.STRING,
      additionalCharges: DataTypes.STRING,
      createdBy: DataTypes.STRING,
      tags: DataTypes.STRING,
      transactionCharge: DataTypes.STRING,
      VATRate: DataTypes.STRING,
      CompanyProfileId: DataTypes.INTEGER,
      VendorId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "PurchaseOrders",
    }
  );
  return PurchaseOrders;
};
