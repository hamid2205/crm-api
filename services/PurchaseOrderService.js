const db = require("../models");
const LogService = require("./LogService")("PurchaseOrderService");

module.exports = () => {
  /**
   *
   * @param {*} payload
   * @returns
   */
  const createPurchaseOrder = async (payload) => {
    const { PurchaseOrderItems, PurchaseOrderTerms, ...rest } = payload;

    const orders = await db.PurchaseOrders.create(rest);

    const _customFields = PurchaseOrderItems.map((item) => ({
      ...item,
      PurchaseOrderId: orders.id,
    }));
    const items = await db.PurchaseOrderItems.bulkCreate(_customFields);

    const _termFields = PurchaseOrderTerms.map((item) => ({
      ...item,
      PurchaseOrderId: orders.id,
    }));
    const terms = await db.PurchaseOrderTerms.bulkCreate(_termFields);

    if (orders && items && terms) {
      return { orders, items, terms };
    }
  };

  const readPurchaseOrder = async (limit, page, where = {}, include) => {
    const limitOffset = {};

    if (limit && page) {
      limitOffset.limit = +limit;
      limitOffset.offset = (+page - 1) * +limit;
    }
    const order = await db.PurchaseOrders.findAndCountAll({
      ...limitOffset,
      where,
      include,
    });
    return order;
  };

  /**
   * Update Proforma Invoice
   * @param {*} payload
   * @param {*} where
   * @returns
   */
  const updatePurchaseOrder = async (payload = {}, where = {}) => {
    try {
      const purchase = await db.PurchaseOrders.update(payload, { where });
      if (purchase) {
        LogService.logInfo("Purchase Order has been updated successfully...");
        return purchase;
      }
      LogService.logError("Failed to update purchase order");
    } catch (error) {
      LogService.logError("Failed to update purchase order");
      LogService.logError(error);
      return false;
    }
  };

  /**
   * Delete Proforma
   * @param {*} id
   * @returns
   */
  const deletePurchaseOrder = async (id = 0) => {
    try {
      const purchase = await db.PurchaseOrders.findByPk(id);
      if (purchase) {
        await purchase.destroy();
        LogService.logInfo("Purchase Order has been deleted successfully...");
        return purchase;
      }
      LogService.logWarning("404- User not found");
      return false;
    } catch (error) {
      LogService.logError("Failed to delete purchase order");
      LogService.logError(error);
      return false;
    }
  };

  return {
    createPurchaseOrder,
    readPurchaseOrder,
    updatePurchaseOrder,
    deletePurchaseOrder,
  };
};
