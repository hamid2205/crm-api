"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProformaTerms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.ProformaInvoices);
    }
  }
  ProformaTerms.init(
    {
      ProformaInvoiceId: DataTypes.INTEGER,
      termCondition: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ProformaTerms",
    }
  );
  return ProformaTerms;
};
