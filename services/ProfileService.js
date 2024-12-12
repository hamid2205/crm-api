const db = require("../models");
const LogService = require("./LogService")("ProfileService");

module.exports = () => {
    /**
   *
   * @param {*} payload
   * @returns
   */
    const createProfile = async (payload) => {
        const profile = await db.CompanyProfile.create(payload);
        if (profile) {
          return profile;
        }
        return profile;
      };

      const readProfile = async (limit = 5, offset = 0, where = {}, include) => {
        const profile = await db.CompanyProfile.findAndCountAll({
          limit,
          offset,
          where,
          include,
        });
        return profile;
      };
    
      /**
       * Update Profile
       * @param {*} payload
       * @param {*} where
       * @returns
       */
      const updateProfile = async (payload = {}, where = {}) => {
        try {
          const profile = await db.CompanyProfile.update(payload, { where });
          if (profile) {
            LogService.logInfo("Profile has been updated successfully...");
            return profile;
          }
          LogService.logError("Failed to update profile");
        } catch (error) {
          LogService.logError("Failed to update profile");
          LogService.logError(error);
          return false;
        }
      };
    
      /**
       * Delete Profile
       * @param {*} id
       * @returns
       */
      const deleteProfile = async (id = 0) => {
        try {
          const profile = await db.CompanyProfile.findByPk(id);
          if (profile) {
            await profile.destroy();
            LogService.logInfo("Profile has been deleted successfully...");
            return profile;
          }
          LogService.logWarning("404- User not found");
          return false;
        } catch (error) {
          LogService.logError("Failed to delete profile");
          LogService.logError(error);
          return false;
        }
      };

    return {
        createProfile,
        readProfile,
        updateProfile,
        deleteProfile,
    }
}