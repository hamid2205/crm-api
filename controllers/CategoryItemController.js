const CategoryItemService = require("../services/CategoryItemService")();
const LogService = require("../services/LogService")("CategoryItemController");
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
      const item = await CategoryItemService.createItem(payload);
      return res.status(200).send(item);
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

    let { limit, page, categoryId, subCategoryId } = req.query;
    let offset = 0;

    if (q) {
      where.itemNo = {
        [Op.like]: `${q}%`,
      };
    }

    if (categoryId) {
      where.categoryId = categoryId;
    }

    if (subCategoryId) {
      where.subCategoryId = subCategoryId;
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
      const item = await CategoryItemService.readItem(limit, offset, where, [
        {
          model: db.Categories,
        },
        { model: db.SubCategory },
      ]);
      LogService.logInfo(JSON.stringify(item));
      return res.status(200).send(item);
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
      const item = await CategoryItemService.updateItem(payload, where);
      return res.status(200).send(item);
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
      const item = await CategoryItemService.deleteItem(id);
      return res.status(200).send(item);
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
