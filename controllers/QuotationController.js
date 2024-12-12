const QuotationService = require("../services/QuotationService")();
const LogService = require("../services/LogService")("QuotationController");
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
      const quote = await QuotationService.createQuotation(payload);
      return res.status(200).send(quote);
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
    const { q, quoteId } = req.query;
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

    if (quoteId) {
      where.id = quoteId;
    }
    try {
      const quote = await QuotationService.readQuotation(limit, page, where, [
        {
          model: db.Clients,
        },
        {
          model: db.CompanyProfile,
        },
        {
          model: db.QuotationItems,
        },
        {
          model: db.QuotationTerms,
        },
      ]);
      LogService.logInfo(JSON.stringify(quote));
      return res.status(200).send(quote);
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
      const quote = await QuotationService.updateQuotation(payload, where);
      return res.status(200).send(quote);
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
      const quote = await QuotationService.deleteQuotation(id);
      return res.status(200).send(quote);
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
