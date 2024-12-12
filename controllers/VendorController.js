const VendorService = require("../services/VendorService")();
const LogService = require("../services/LogService")("VendorController");
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
      const vendors = await VendorService.createVendor(payload);
      return res.status(200).send(vendors);
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
      limit = 5;
    }
    if (!page) {
      page = 1;
    }

    // type casting
    page = +page;
    limit = +limit;

    offset = (page - 1) * limit;

    try {
      const vendor = await VendorService.readVendor(limit, offset, where);
      LogService.logInfo(JSON.stringify(vendor));
      return res.status(200).send(vendor);
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
      const vendor = await VendorService.updateVendor(payload, where);
      return res.status(200).send(vendor);
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
      const vendor = await VendorService.deleteVendor(id);
      return res.status(200).send(vendor);
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
