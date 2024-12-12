const db = require("../models");
const LogService = require("./LogService")("TermService");

module.exports = () => {
  /**
   *
   * @param {*} payload
   * @returns
   */
  const createTerm = async (payload) => {
    const term = await db.QuotationTerms.create(payload);
    if (term) {
      return term;
    }
    return term;
  };

  const readTerm = async (limit = 5, offset = 0, where = {}, include) => {
    const term = await db.QuotationTerms.findAndCountAll({
      limit,
      offset,
      where,
      include,
    });
    return term;
  };

  /**
   * Update Vendor
   * @param {*} payload
   * @param {*} where
   * @returns
   */
  const updateTerm = async (payload = {}, where = {}) => {
    try {
      const term = await db.QuotationTerms.update(payload, { where });
      if (term) {
        LogService.logInfo("Vendor has been updated successfully...");
        return term;
      }
      LogService.logError("Failed to update quotation");
    } catch (error) {
      LogService.logError("Failed to update quotation");
      LogService.logError(error);
      return false;
    }
  };

  /**
   * Delete Vendor
   * @param {*} id
   * @returns
   */
  const deleteTerm = async (id = 0) => {
    try {
      const term = await db.QuotationTerms.findByPk(id);
      if (term) {
        await term.destroy();
        LogService.logInfo("Vendor has been deleted successfully...");
        return term;
      }
      LogService.logWarning("404- User not found");
      return false;
    } catch (error) {
      LogService.logError("Failed to delete term");
      LogService.logError(error);
      return false;
    }
  };

  return {
    createTerm,
    readTerm,
    updateTerm,
    deleteTerm,
  };
};
