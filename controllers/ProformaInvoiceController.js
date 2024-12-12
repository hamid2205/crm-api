const ProformaInvoiceService = require("../services/ProformaInvoiceService")();
const LogService = require("../services/LogService")(
  "ProformaInvoiceController"
);
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
      const proforma = await ProformaInvoiceService.createProforma(payload);
      return res.status(200).send(proforma);
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
    const { q, invoiceId } = req.query;
    const where = {};

    let { limit, page } = req.query;
    let offset = 0;

    if (q) {
      where[Op.or] = [
        {
          businessName: {
            [Op.like]: `%${q}%`,
          },
        },
        {
          businessGSTIN: {
            [Op.like]: `%${q}%`,
          },
        },
      ];
    }

    if (invoiceId) {
      where.id = invoiceId;
    }
    try {
      const invoice = await ProformaInvoiceService.readProforma(
        limit,
        page,
        where,
        [
          {
            model: db.Clients,
          },
          {
            model: db.CompanyProfile,
          },
          {
            model: db.ProformaItems,
          },
          {
            model: db.ProformaTerms,
          },
        ]
      );
      LogService.logInfo(JSON.stringify(invoice));
      return res.status(200).send(invoice);
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
      const proforma = await ProformaInvoiceService.updateProforma(
        payload,
        where
      );
      return res.status(200).send(proforma);
    } catch (error) {
      return res.status(400).send(error);
    }
  };

  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  const destroy = async (req, res, next) => {
    try {
      const { id } = req.params;
      const proforma = await ProformaInvoiceService.deleteProforma(id);
      return res.status(200).send(proforma);
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
