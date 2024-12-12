"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Clients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Quotations);
      this.hasMany(models.ProformaInvoices);
    }
  }
  Clients.init(
    {
      logo: DataTypes.STRING,
      businessName: DataTypes.STRING,
      industry: DataTypes.STRING,
      businessGSTIN: DataTypes.STRING,
      businessPAN: DataTypes.STRING,
      clientType: DataTypes.STRING,
      taxTreatment: DataTypes.STRING,
      country: DataTypes.STRING,
      state: DataTypes.STRING,
      city: DataTypes.STRING,
      zipCode: DataTypes.STRING,
      street: DataTypes.STRING,
      shippingName: DataTypes.STRING,
      shippingCountry: DataTypes.STRING,
      shippingState: DataTypes.STRING,
      shippingCity: DataTypes.STRING,
      shippingZipCode: DataTypes.STRING,
      shippingStreet: DataTypes.STRING,
      businessAliasName: DataTypes.STRING,
      uniqueKey: DataTypes.STRING,
      email: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      attachments: DataTypes.STRING,
      isClient: DataTypes.TINYINT,
    },
    {
      sequelize,
      modelName: "Clients",
    }
  );
  return Clients;
};
