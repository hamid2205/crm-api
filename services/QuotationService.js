const db = require("../models");
const LogService = require("./LogService")("QuotationService");

module.exports = () => {
  /**
   *
   * @param {*} payload
   * @returns
   */
  const createQuotation = async (payload) => {
    const { QuotationItems, QuotationTerms, ...rest } = payload;

    const quote = await db.Quotations.create(rest);

    const _customFields = QuotationItems.map((item) => ({
      ...item,
      QuotationId: quote.id,
    }));
    const items = await db.QuotationItems.bulkCreate(_customFields);

    const _termFields = QuotationTerms.map((item) => ({
      ...item,
      QuotationId: quote.id,
    }));
    const terms = await db.QuotationTerms.bulkCreate(_termFields);

    if (quote && items && terms) {
      return { quote, items, terms };
    }
  };

  const readQuotation = async (limit, page, where = {}, include) => {
    const limitOffset = {};

    if (limit && page) {
      limitOffset.limit = +limit;
      limitOffset.offset = (+page - 1) * +limit;
    }
    const quote = await db.Quotations.findAndCountAll({
      ...limitOffset,
      where,
      include,
    });
    return quote;
  };

  /**
   * Update Vendor
   * @param {*} payload
   * @param {*} where
   * @returns
   */
  const updateQuotation = async (payload = {}, where = {}) => {
    try {
      const quote = await db.Quotations.update(payload, { where });
      if (quote) {
        LogService.logInfo("Vendor has been updated successfully...");
        return quote;
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
  const deleteQuotation = async (id = 0) => {
    try {
      const quote = await db.Quotations.findByPk(id);
      if (quote) {
        await quote.destroy();
        LogService.logInfo("Vendor has been deleted successfully...");
        return quote;
      }
      LogService.logWarning("404- User not found");
      return false;
    } catch (error) {
      LogService.logError("Failed to delete quote");
      LogService.logError(error);
      return false;
    }
  };

  return {
    createQuotation,
    readQuotation,
    updateQuotation,
    deleteQuotation,
  };
};
