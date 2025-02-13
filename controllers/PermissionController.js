const PermissionService = require("../services/PermissionService")();
const LogService = require("../services/LogService")("RoleController");
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
      const perm = await PermissionService.createPermission(payload);
      return res.status(200).send(perm);
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
      const perm = await PermissionService.readPermission(limit, offset, where);
      LogService.logInfo(JSON.stringify(perm));
      return res.status(200).send(perm);
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
      const perm = await PermissionService.updatePermission(payload, where);
      return res.status(200).send(perm);
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
      const perm = await PermissionService.deletePermission(id);
      return res.status(200).send(perm);
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
