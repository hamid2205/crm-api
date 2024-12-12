const db = require("../models");
const LogService = require("../services/LogService")("ClientService");

module.exports = () => {
    /**
   *
   * @param {*} payload
   * @returns
   */
    const createClient = async (payload) => {
        const clients = await db.Clients.create(payload);
        if (clients) {
          return clients;
        }
        return clients;
      };

      const readClient = async (limit = 5, offset = 0, where = {}, include) => {
        const client = await db.Clients.findAndCountAll({
          limit,
          offset,
          where,
          include,
        });
        return client;
      };
    
      /**
       * Update Client
       * @param {*} payload
       * @param {*} where
       * @returns
       */
      const updateClient = async (payload = {}, where = {}) => {
        try {
          const client = await db.Clients.update(payload, { where });
          if (client) {
            LogService.logInfo("Client has been updated successfully...");
            return client;
          }
          LogService.logError("Failed to update client");
        } catch (error) {
          LogService.logError("Failed to update client");
          LogService.logError(error);
          return false;
        }
      };
    
      /**
       * Delete Client
       * @param {*} id
       * @returns
       */
      const deleteClient = async (id = 0) => {
        try {
          const client = await db.Clients.findByPk(id);
          if (client) {
            await client.destroy();
            LogService.logInfo("Client has been deleted successfully...");
            return client;
          }
          LogService.logWarning("404- User not found");
          return false;
        } catch (error) {
          LogService.logError("Failed to delete client");
          LogService.logError(error);
          return false;
        }
      };

    return {
        createClient,
        readClient,
        updateClient,
        deleteClient,
    }
}