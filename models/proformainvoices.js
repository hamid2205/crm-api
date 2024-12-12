"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProformaInvoices extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.ProformaItems);
      this.hasMany(models.ProformaTerms);
      this.belongsTo(models.Clients);
      this.belongsTo(models.CompanyProfile);
    }
  }
  ProformaInvoices.init(
    {
      date: DataTypes.STRING,
      PINo: DataTypes.STRING,
      billedTo: DataTypes.STRING,
      currency: DataTypes.STRING,
      amount: DataTypes.STRING,
      status: DataTypes.STRING,
      supplyPlace: DataTypes.STRING,
      nextScheduledDate: DataTypes.STRING,
      dueDate: DataTypes.STRING,
      TDSPercent: DataTypes.STRING,
      TDS: DataTypes.STRING,
      paymentDate: DataTypes.STRING,
      taxAmount: DataTypes.STRING,
      GSTIN_UINRecipient: DataTypes.STRING,
      PAN: DataTypes.STRING,
      VATRecipient: DataTypes.STRING,
      PIEmail: DataTypes.STRING,
      taxInvoice: DataTypes.STRING,
      amountPaid: DataTypes.STRING,
      reverseCharges: DataTypes.STRING,
      amountDue: DataTypes.STRING,
      subTotal: DataTypes.STRING,
      discount: DataTypes.STRING,
      taxableValue: DataTypes.STRING,
      HSN_SACList: DataTypes.STRING,
      PIAmount: DataTypes.STRING,
      additionalCharges: DataTypes.STRING,
      createdBy: DataTypes.STRING,
      tags: DataTypes.STRING,
      transactionCharge: DataTypes.STRING,
      transporterName: DataTypes.STRING,
      transportMode: DataTypes.STRING,
      distance: DataTypes.STRING,
      VATRate: DataTypes.STRING,
      ClientId: DataTypes.INTEGER,
      CompanyProfileId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ProformaInvoices",
    }
  );
  return ProformaInvoices;
};
