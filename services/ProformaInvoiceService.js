const db = require("../models");
const LogService = require("./LogService")("ProformaInvoiceService");

module.exports = () => {
  /**
   *
   * @param {*} payload
   * @returns
   */
  const createProforma = async (payload) => {
    const { ProformaItems, ProformaTerms, ...rest } = payload;

    const proforma = await db.ProformaInvoices.create(rest);

    const _customFields = ProformaItems.map((item) => ({
      ...item,
      ProformaInvoiceId: proforma.id,
    }));
    const items = await db.ProformaItems.bulkCreate(_customFields);

    const _termFields = ProformaTerms.map((item) => ({
      ...item,
      ProformaInvoiceId: proforma.id,
    }));
    const terms = await db.ProformaTerms.bulkCreate(_termFields);

    if (proforma && items && terms) {
      return { proforma, items, terms };
    }
  };

  const readProforma = async (limit, page, where = {}, include) => {
    const limitOffset = {};

    if (limit && page) {
      limitOffset.limit = +limit;
      limitOffset.offset = (+page - 1) * +limit;
    }
    const invoice = await db.ProformaInvoices.findAndCountAll({
      ...limitOffset,
      // offset,
      where,
      include,
    });
    return invoice;
  };

  /**
   * Update Proforma Invoice
   * @param {*} payload
   * @param {*} where
   * @returns
   */
  const updateProforma = async (payload = {}, where = {}) => {
    try {
      const proforma = await db.ProformaInvoices.update(payload, { where });
      if (proforma) {
        LogService.logInfo("Proforma has been updated successfully...");
        return proforma;
      }
      LogService.logError("Failed to update proforma");
    } catch (error) {
      LogService.logError("Failed to update proforma");
      LogService.logError(error);
      return false;
    }
  };

  /**
   * Delete Proforma
   * @param {*} id
   * @returns
   */
  const deleteProforma = async (id = 0) => {
    try {
      const proforma = await db.ProformaInvoices.findByPk(id);
      if (proforma) {
        await proforma.destroy();
        LogService.logInfo("Proforma has been deleted successfully...");
        return proforma;
      }
      LogService.logWarning("404- User not found");
      return false;
    } catch (error) {
      LogService.logError("Failed to delete proforma");
      LogService.logError(error);
      return false;
    }
  };

  return {
    createProforma,
    readProforma,
    updateProforma,
    deleteProforma,
  };
};
