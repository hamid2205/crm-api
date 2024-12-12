const db = require("../models");
const LogService = require("../services/LogService")("LeadService");

module.exports = () => {
    /**
   *
   * @param {*} payload
   * @returns
   */
    const createLead = async (payload) => {
        const leads = await db.Leads.create(payload);
        if (leads) {
          return leads;
        }
        return leads;
      };

      const readLead = async (limit = 5, offset = 0, where = {}, include) => {
        const lead = await db.Leads.findAndCountAll({
          limit,
          offset,
          where,
          include,
        });
        return lead;
      };
    
      /**
       * Update Client
       * @param {*} payload
       * @param {*} where
       * @returns
       */
      const updateLead = async (payload = {}, where = {}) => {
        try {
          const lead = await db.Leads.update(payload, { where });
          if (lead) {
            LogService.logInfo("Lead has been updated successfully...");
            return lead;
          }
          LogService.logError("Failed to update lead");
        } catch (error) {
          LogService.logError("Failed to update lead");
          LogService.logError(error);
          return false;
        }
      };
    
      /**
       * Delete Client
       * @param {*} id
       * @returns
       */
      const deleteLead = async (id = 0) => {
        try {
          const lead = await db.Leads.findByPk(id);
          if (lead) {
            await lead.destroy();
            LogService.logInfo("Lead has been deleted successfully...");
            return lead;
          }
          LogService.logWarning("404- User not found");
          return false;
        } catch (error) {
          LogService.logError("Failed to delete lead");
          LogService.logError(error);
          return false;
        }
      };

    return {
        createLead,
        readLead,
        updateLead,
        deleteLead,
    }
}