const db = require("../models");
const LogService = require("./LogService")("CategoryItemService");

module.exports = () => {
  /**
   *
   * @param {*} payload
   * @returns
   */
  const createItem = async (payload) => {
    const item = await db.CategoryItem.create(payload);
    if (item) {
      return item;
    }
    return item;
  };

  const readItem = async (limit = 5, offset = 0, where = {}, include) => {
    const item = await db.CategoryItem.findAndCountAll({
      limit,
      offset,
      where,
      include,
    });
    return item;
  };

  /**
   * Update Profile
   * @param {*} payload
   * @param {*} where
   * @returns
   */
  const updateItem = async (payload = {}, where = {}) => {
    try {
      const item = await db.CategoryItem.update(payload, { where });
      if (item) {
        LogService.logInfo("Item has been updated successfully...");
        return item;
      }
      LogService.logError("Failed to update Item");
    } catch (error) {
      LogService.logError("Failed to update Item");
      LogService.logError(error);
      return false;
    }
  };

  /**
   * Delete Profile
   * @param {*} id
   * @returns
   */
  const deleteItem = async (id = 0) => {
    try {
      const item = await db.CategoryItem.findByPk(id);
      if (item) {
        await item.destroy();
        LogService.logInfo("Item has been deleted successfully...");
        return item;
      }
      LogService.logWarning("404- User not found");
      return false;
    } catch (error) {
      LogService.logError("Failed to delete item");
      LogService.logError(error);
      return false;
    }
  };

  return {
    createItem,
    readItem,
    updateItem,
    deleteItem,
  };
};
