const { ScanCommand } = require("@aws-sdk/client-dynamodb");
const { source } = require("../../config");

const command = new ScanCommand({
  TableName: source.tableName,
});

module.exports = command;
