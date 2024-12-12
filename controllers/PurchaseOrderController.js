const PurchaseOrderService = require("../services/PurchaseOrderService")();
const LogService = require("../services/LogService")("PurchaseOrderController");
const { Op } = require("sequelize");
const db = require("../models");

module.exports = () => {
  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  const create = async (req, res, next) => {
    try {
      const payload = req.body;
      const order = await PurchaseOrderService.createPurchaseOrder(payload);
      return res.status(200).send(order);
    } catch (error) {
      return res.status(400).send(error);
    }
  };

  /**
   * Listing resources
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  const read = async (req, res, next) => {
    const { q, orderId } = req.query;
    const where = {};

    let { limit, page } = req.query;
    let offset = 0;

    if (q) {
      where[Op.or] = [
        {
          name: {
            [Op.like]: `%${q}%`,
          },
        },
      ];
    }

    if (orderId) {
      where.id = orderId;
    }
    try {
      const order = await PurchaseOrderService.createPurchaseOrder(
        limit,
        page,
        where,
        [
          {
            model: db.Vendors,
          },
          {
            model: db.CompanyProfile,
          },
          {
            model: db.PurchaseOrderItems,
          },
          {
            model: db.PurchseOrderTerms,
          },
        ]
      );
      LogService.logInfo(JSON.stringify(order));
      return res.status(200).send(order);
    } catch (error) {
      LogService.logError(error);
      return res.status(400).send(error);
    }
  };

  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  const update = async (req, res, next) => {
    try {
      const payload = req.body;
      const { id } = req.params;
      const where = { id };
      const purchase = await PurchaseOrderService.updatePurchaseOrder(
        payload,
        where
      );
      return res.status(200).send(purchase);
    } catch (error) {
      return res.status(400).send(error);
    }
  };

  /**
   *
   * @param {*} reqs
   * @param {*} res
   * @param {*} next
   */
  const destroy = async (req, res, next) => {
    try {
      const { id } = req.params;
      const purchase = await PurchaseOrderService.deletePurchaseOrder(id);
      return res.status(200).send(purchase);
    } catch (error) {
      return res.status(400).send(error);
    }
  };

  return {
    create,
    read,
    update,
    destroy,
  };
};
