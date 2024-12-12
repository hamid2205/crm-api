"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Vendors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.PurchaseOrders);
    }
  }
  Vendors.init(
    {
      logo: DataTypes.STRING,
      businessName: DataTypes.STRING,
      industry: DataTypes.STRING,
      isVendor: DataTypes.INTEGER,
      businessGSTIN: DataTypes.STRING,
      businessPAN: DataTypes.STRING,
      vendorType: DataTypes.STRING,
      taxTreatment: DataTypes.STRING,
      country: DataTypes.STRING,
      state: DataTypes.STRING,
      city: DataTypes.STRING,
      zipCode: DataTypes.STRING,
      street: DataTypes.STRING,
      businessAliasName: DataTypes.STRING,
      uniqueKey: DataTypes.STRING,
      email: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      attachments: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Vendors",
    }
  );
  return Vendors;
};
