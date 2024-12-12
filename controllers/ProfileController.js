const ProfileService = require("../services/ProfileService")();
const LogService = require("../services/LogService")("ProfileController")
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
        const profile = await ProfileService.createProfile(payload);
        return res.status(200).send(profile);
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
      const profile = await ProfileService.readProfile(limit, offset, where);
      LogService.logInfo(JSON.stringify(profile));
      return res.status(200).send(profile);
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
      const profile = await ProfileService.updateProfile(payload, where);
      return res.status(200).send(profile);
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
      const profile = await ProfileService.deleteProfile(id);
      return res.status(200).send(profile);
    } catch (error) {
      return res.status(400).send(error);
    }
  };


    return {
        create,
        read,
        update,
        destroy,
    }
}