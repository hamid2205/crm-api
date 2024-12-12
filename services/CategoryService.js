const db = require("../models");
const LogService = require("../services/LogService")("CategoryService");

module.exports = () => {
  /**
   *
   * @param {*} payload
   * @returns
   */
  const createCategory = async (payload) => {
    const category = await db.Categories.create(payload);
    if (category) {
      return category;
    }
    return category;
  };

  const readCategory = async (limit, page, where = {}, include) => {
    const limitOffset = {};

    if (limit && page) {
      limitOffset.limit = +limit;
      limitOffset.offset = (+page - 1) * +limit;
    }

    const category = await db.Categories.findAndCountAll({
      ...limitOffset,
      where,
      include,
    });
    return category;
  };

  /**
   * Update Client
   * @param {*} payload
   * @param {*} where
   * @returns
   */
  const updateCategory = async (payload = {}, where = {}) => {
    try {
      const category = await db.Categories.update(payload, { where });
      if (category) {
        LogService.logInfo("Lead has been updated successfully...");
        return category;
      }
      LogService.logError("Failed to update category");
    } catch (error) {
      LogService.logError("Failed to update category");
      LogService.logError(error);
      return false;
    }
  };

  /**
   * Delete Client
   * @param {*} id
   * @returns
   */
  const deleteCategory = async (id = 0) => {
    try {
      const category = await db.Categories.findByPk(id);
      if (category) {
        await category.destroy();
        LogService.logInfo("Lead has been deleted successfully...");
        return category;
      }
      LogService.logWarning("404- User not found");
      return false;
    } catch (error) {
      LogService.logError("Failed to delete category");
      LogService.logError(error);
      return false;
    }
  };

  return {
    createCategory,
    readCategory,
    updateCategory,
    deleteCategory,
  };
};
