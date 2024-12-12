const db = require("../models");
const LogService = require("../services/LogService")("VendorService");

module.exports = () => {
  /**
   *
   * @param {*} payload
   * @returns
   */
  const createVendor = async (payload) => {
    const vendor = await db.Vendors.create(payload);
    if (vendor) {
      return vendor;
    }
    return vendor;
  };

  const readVendor = async (limit = 5, offset = 0, where = {}, include) => {
    const vendor = await db.Vendors.findAndCountAll({
      limit,
      offset,
      where,
      include,
    });
    return vendor;
  };

  /**
   * Update Vendor
   * @param {*} payload
   * @param {*} where
   * @returns
   */
  const updateVendor = async (payload = {}, where = {}) => {
    try {
      const vendor = await db.Vendors.update(payload, { where });
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
  const deleteVendor = async (id = 0) => {
    try {
      const vendor = await db.Vendors.findByPk(id);
      if (vendor) {
        await vendor.destroy();
        LogService.logInfo("Vendor has been deleted successfully...");
        return vendor;
      }
      LogService.logWarning("404- User not found");
      return false;
    } catch (error) {
      LogService.logError("Failed to delete vendor");
      LogService.logError(error);
      return false;
    }
  };

  return {
    createVendor,
    readVendor,
    updateVendor,
    deleteVendor,
  };
};
