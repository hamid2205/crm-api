const UserService = require("../services/UserService")();
const LogService = require("../services/LogService")("UserController");
const { Op } = require("sequelize");
// const db = require("../models");
const md5 = require("md5");
const jwt = require("jsonwebtoken");

module.exports = () => {
  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */

  const create = async (req, res, next) => {
    const payload = req.body;

    payload.password = md5(payload.password);
    try {
      const user = await UserService.createUser(payload);
      if (user) {
        const token = jwt.sign(
          {
            data: user,
          },
          "secret",
          { expiresIn: 60 }
        );
        res.status(200).json({ token, userInfo: user });
        // res.status(200).send(user);
        return;
      }
    } catch (error) {
      res.status(400).send(error);
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
      const user = await UserService.readUser(limit, offset, where);
      LogService.logInfo(JSON.stringify(user));
      return res.status(200).send(user);
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
      const user = await UserService.updateUser(payload, where);
      return res.status(200).send(user);
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
      const user = await UserService.deleteUser(id);
      return res.status(200).send(user);
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
