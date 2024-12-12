"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Leads extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Leads.init(
    {
      pipeline: DataTypes.STRING,
      contactName: DataTypes.STRING,
      organisationName: DataTypes.STRING,
      designation: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      country: DataTypes.STRING,
      state: DataTypes.STRING,
      status: DataTypes.STRING,
      leadSource: DataTypes.STRING,
      budget: DataTypes.STRING,
      subject: DataTypes.STRING,
      creator: DataTypes.STRING,
      assignee: DataTypes.STRING,
      followUpDate: DataTypes.STRING,
      lastCommentedBy: DataTypes.STRING,
      whatsappLink: DataTypes.STRING,
      firstResponseTime: DataTypes.STRING,
      lastInternalNote: DataTypes.STRING,
      nextActivity: DataTypes.STRING,
      dateClosed: DataTypes.STRING,
      labels: DataTypes.STRING,
      duplicate: DataTypes.STRING,
      isLead: DataTypes.TINYINT,
      createdBy: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Leads",
    }
  );
  return Leads;
};
