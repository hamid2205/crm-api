const db = require("../models");
const LogService = require("./LogService")("SubCategoryService");

module.exports = () => {
    /**
   *
   * @param {*} payload
   * @returns
   */
    const createSubCategory = async (payload) => {
        const subcategory = await db.SubCategory.create(payload);
        if (subcategory) {
          return subcategory;
        }
        return subcategory;
      };

      const readSubCategory = async (limit = 5, offset = 0, where = {}, include) => {
        const subcategory = await db.SubCategory.findAndCountAll({
          limit,
          offset,
          where,
          include,
        });
        return subcategory;
      };
    
      /**
       * Update Client
       * @param {*} payload
       * @param {*} where
       * @returns
       */
      const updateSubCategory = async (payload = {}, where = {}) => {
        try {
          const subcategory = await db.SubCategory.update(payload, { where });
          if (subcategory) {
            LogService.logInfo("Lead has been updated successfully...");
            return subcategory;
          }
          LogService.logError("Failed to update subcategory");
        } catch (error) {
          LogService.logError("Failed to update subcategory");
          LogService.logError(error);
          return false;
        }
      };
    
      /**
       * Delete Client
       * @param {*} id
       * @returns
       */
      const deleteSubCategory = async (id = 0) => {
        try {
          const subcategory = await db.SubCategory.findByPk(id);
          if (subcategory) {
            await subcategory.destroy();
            LogService.logInfo("Lead has been deleted successfully...");
            return subcategory;
          }
          LogService.logWarning("404- User not found");
          return false;
        } catch (error) {
          LogService.logError("Failed to delete subcategory");
          LogService.logError(error);
          return false;
        }
      };

    return {
        createSubCategory,
        readSubCategory,
        updateSubCategory,
        deleteSubCategory,
    }
}