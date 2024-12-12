"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Quotations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.QuotationItems);
      this.hasMany(models.QuotationTerms);
      this.belongsTo(models.Clients);
      this.belongsTo(models.CompanyProfile);
    }
  }
  Quotations.init(
    {
      date: DataTypes.STRING,
      quotationNo: DataTypes.STRING,
      CompanyProfileId: DataTypes.INTEGER,
      ClientId: DataTypes.INTEGER,
      quotedTo: DataTypes.STRING,
      currency: DataTypes.STRING,
      amount: DataTypes.STRING,
      status: DataTypes.STRING,
      supplyPlace: DataTypes.STRING,
      validTill: DataTypes.STRING,
      dueAmount: DataTypes.STRING,
      TDSPercent: DataTypes.STRING,
      TDS: DataTypes.STRING,
      paymentDate: DataTypes.STRING,
      taxAmount: DataTypes.STRING,
      GSTIN_UIN: DataTypes.STRING,
      PAN: DataTypes.STRING,
      VATRecipient: DataTypes.STRING,
      quotationEmail: DataTypes.STRING,
      taxInvoice: DataTypes.STRING,
      reverseCharges: DataTypes.STRING,
      amountDue: DataTypes.STRING,
      subTotal: DataTypes.STRING,
      discount: DataTypes.STRING,
      taxableValue: DataTypes.STRING,
      HSN_SACList: DataTypes.STRING,
      quotationAmount: DataTypes.STRING,
      additionalCharges: DataTypes.STRING,
      createdBy: DataTypes.STRING,
      tags: DataTypes.STRING,
      transactionCharge: DataTypes.STRING,
      transporterName: DataTypes.STRING,
      transportMode: DataTypes.STRING,
      distance: DataTypes.STRING,
      VATRate: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Quotations",
    }
  );
  return Quotations;
};
