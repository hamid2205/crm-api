"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PurchaseOrderTerms extends Model {
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
  PurchaseOrderTerms.init(
    {
      PurchaseOrderId: DataTypes.INTEGER,
      termCondition: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "PurchaseOrderTerms",
    }
  );
  return PurchaseOrderTerms;
};
