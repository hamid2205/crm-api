"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CategoryItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.SubCategory);
      this.belongsTo(models.Categories);
      // define association here
    }
  }
  CategoryItem.init(
    {
      subCategoryId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
      ItemNo: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "CategoryItem",
    }
  );
  return CategoryItem;
};
