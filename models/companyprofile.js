"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CompanyProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Quotations);
      this.hasMany(models.ProformaInvoices);
      this.hasMany(models.PurchaseOrders);
    }
  }
  CompanyProfile.init(
    {
      logo: DataTypes.STRING,
      companyName: DataTypes.STRING,
      state: DataTypes.STRING,
      city: DataTypes.STRING,
      address: DataTypes.STRING,
      GSTIN: DataTypes.STRING,
      PAN: DataTypes.STRING,
      email: DataTypes.STRING,
      phone1: DataTypes.STRING,
      phone2: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "CompanyProfile",
    }
  );
  return CompanyProfile;
};
