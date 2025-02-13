const db = require("../models");
const LogService = require("../services/LogService")("PermissionService");

module.exports = () => {
  /**
   *
   * @param {*} payload
   * @returns
   */
  const createPermission = async (payload) => {
    const perm = await db.Permission.create(payload);
    if (perm) {
      return perm;
    }
    return perm;
  };

  const readPermission = async (limit = 5, offset = 0, where = {}, include) => {
    const perm = await db.Permission.findAndCountAll({
      limit,
      offset,
      where,
      include,
    });
    return perm;
  };

  /**
   * Update Permission
   * @param {*} payload
   * @param {*} where
   * @returns
   */
  const updatePermission = async (payload = {}, where = {}) => {
    try {
      const perm = await db.Permission.update(payload, { where });
      if (perm) {
        LogService.logInfo("Permission has been updated successfully...");
        return perm;
      }
      LogService.logError("Failed to update permission");
    } catch (error) {
      LogService.logError("Failed to update permission");
      LogService.logError(error);
      return false;
    }
  };

  /**
   * Delete Vendor
   * @param {*} id
   * @returns
   */
  const deletePermission = async (id = 0) => {
    try {
      const perm = await db.Permission.findByPk(id);
      if (perm) {
        await perm.destroy();
        LogService.logInfo("Permission has been deleted successfully...");
        return perm;
      }
      LogService.logWarning("404- Permission not found");
      return false;
    } catch (error) {
      LogService.logError("Failed to delete permission");
      LogService.logError(error);
      return false;
    }
  };

  return {
    createPermission,
    readPermission,
    updatePermission,
    deletePermission,
  };
};
