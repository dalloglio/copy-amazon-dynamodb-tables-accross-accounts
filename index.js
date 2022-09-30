require("dotenv").config();

const api = require("./src/libs/api");
const { sourceClient, targetClient } = require("./src/utils/clients");
const { scanCommand, batchWriteItemCommand } = require("./src/utils/commands");

(async () => {
  try {
    const sourceItems = await api(sourceClient).scan(scanCommand);
    await api(targetClient).batchWriteItem(batchWriteItemCommand(sourceItems));
  } catch (error) {
    console.error(error);
  }
})();
