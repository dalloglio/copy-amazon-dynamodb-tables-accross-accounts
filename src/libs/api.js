const api = (client) => {
  return {
    scan: async (command) => {
      try {
        const response = await client.send(command);
        return response.Items;
      } catch (error) {
        throw error;
      }
    },

    batchWriteItem: async (command) => {
      try {
        await client.send(command);
      } catch (error) {
        throw error;
      }
    },
  };
};

module.exports = api;
