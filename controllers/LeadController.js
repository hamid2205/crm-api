const LeadService = require("../services/LeadService")();
const LogService = require("../services/LogService")("LeadController");
const { Op } = require("sequelize");

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
      const leads = await LeadService.createLead(payload);
      return res.status(200).send(leads);
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
    const { q } = req.query;
    const where = {};

    let { limit, page } = req.query;
    let offset = 0;

    if (q) {
      where[Op.or] = [
        {
          contactName: {
            [Op.like]: `%${q}%`,
          },
        },
        {
          organisationName: {
            [Op.like]: `%${q}%`,
          },
        },
        {
          phone: {
            [Op.like]: `%${q}%`,
          },
        },
      ];
    }

    if (!limit) {
      limit = 10;
    }
    if (!page) {
      page = 1;
    }

    // type casting
    page = +page;
    limit = +limit;

    offset = (page - 1) * limit;

    try {
      const lead = await LeadService.readLead(limit, offset, where);
      LogService.logInfo(JSON.stringify(lead));
      return res.status(200).send(lead);
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
      const lead = await LeadService.updateLead(payload, where);
      return res.status(200).send(lead);
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
      const lead = await LeadService.deleteLead(id);
      return res.status(200).send(lead);
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
