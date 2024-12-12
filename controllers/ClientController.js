const ClientService = require("../services/ClientService")();
const LogService = require("../services/LogService")("ClientController");
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
      const clients = await ClientService.createClient(payload);
      return res.status(200).send(clients);
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
      const client = await ClientService.readClient(limit, offset, where);
      LogService.logInfo(JSON.stringify(client));
      return res.status(200).send(client);
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
      const client = await ClientService.updateClient(payload, where);
      return res.status(200).send(client);
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
      const client = await ClientService.deleteClient(id);
      return res.status(200).send(client);
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
