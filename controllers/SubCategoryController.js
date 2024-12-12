const SubCategoryService = require("../services/SubCategoryService")();
const LogService = require("../services/LogService")("SubCategoryController");
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
      const subCat = await SubCategoryService.createSubCategory(payload);
      return res.status(200).send(subCat);
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
        // {
        //   businessName: {
        //     [Op.like]: `%${q}%`,
        //   },
        // },
        // {
        //   businessGSTIN: {
        //     [Op.like]: `%${q}%`,
        //   },
        // },
        {
          categoryId: q,
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
      const subCat = await SubCategoryService.readSubCategory(
        limit,
        offset,
        where
      );
      LogService.logInfo(JSON.stringify(subCat));
      return res.status(200).send(subCat);
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
      const subCat = await SubCategoryService.updateSubCategory(payload, where);
      return res.status(200).send(subCat);
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
      const subCat = await SubCategoryService.deleteSubCategory(id);
      return res.status(200).send(subCat);
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
