const { source } = require("../../config");
const dynamoDBClient = require("../../libs/client");

const client = dynamoDBClient(
  source.region,
  source.accessKeyId,
  source.secretAccessKey
);

module.exports = client;
