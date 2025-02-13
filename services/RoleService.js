const db = require("../models");
const LogService = require("../services/LogService")("RoleService");

module.exports = () => {
  /**
   *
   * @param {*} payload
   * @returns
   */
  const createRole = async (payload) => {
    const role = await db.Role.create(payload);
    if (role) {
      return role;
    }
    return role;
  };

  const readRole = async (limit = 5, offset = 0, where = {}, include) => {
    const role = await db.Role.findAndCountAll({
      limit,
      offset,
      where,
      include,
    });
    return role;
  };

  /**
   * Update Role
   * @param {*} payload
   * @param {*} where
   * @returns
   */
  const updateRole = async (payload = {}, where = {}) => {
    try {
      const role = await db.Role.update(payload, { where });
      if (role) {
        LogService.logInfo("Role has been updated successfully...");
        return role;
      }
      LogService.logError("Failed to update role");
    } catch (error) {
      LogService.logError("Failed to update role");
      LogService.logError(error);
      return false;
    }
  };

  /**
   * Delete Vendor
   * @param {*} id
   * @returns
   */
  const deleteRole = async (id = 0) => {
    try {
      const role = await db.Role.findByPk(id);
      if (role) {
        await role.destroy();
        LogService.logInfo("Role has been deleted successfully...");
        return role;
      }
      LogService.logWarning("404- Role not found");
      return false;
    } catch (error) {
      LogService.logError("Failed to delete role");
      LogService.logError(error);
      return false;
    }
  };

  return {
    createRole,
    readRole,
    updateRole,
    deleteRole,
  };
};
