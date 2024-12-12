const db = require("../models");
const LogService = require("../services/LogService")("UserService");

module.exports = () => {
    /**
   *
   * @param {*} payload
   * @returns
   */
    const createUser = async (payload) => {
        const user = await db.Users.create(payload);
        if (user) {
          return user;
        }
        return user;
      };

      const readUser = async (limit = 5, offset = 0, where = {}, include) => {
        const user = await db.Users.findAndCountAll({
          limit,
          offset,
          where,
          include,
        });
        return user;
      };
    
      /**
       * Update User
       * @param {*} payload
       * @param {*} where
       * @returns
       */
      const updateUser = async (payload = {}, where = {}) => {
        try {
          const vendor = await db.Users.update(payload, { where });
          if (vendor) {
            LogService.logInfo("Vendor has been updated successfully...");
            return vendor;
          }
          LogService.logError("Failed to update vendor");
        } catch (error) {
          LogService.logError("Failed to update vendor");
          LogService.logError(error);
          return false;
        }
      };
    
      /**
       * Delete Vendor
       * @param {*} id
       * @returns
       */
      const deleteUser = async (id = 0) => {
        try {
          const user = await db.Users.findByPk(id);
          if (user) {
            await user.destroy();
            LogService.logInfo("User has been deleted successfully...");
            return user;
          }
          LogService.logWarning("404- User not found");
          return false;
        } catch (error) {
          LogService.logError("Failed to delete user");
          LogService.logError(error);
          return false;
        }
      };

    return {
        createUser,
        readUser,
        updateUser,
        deleteUser,
    }
}