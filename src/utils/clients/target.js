const { target } = require("../../config");
const dynamoDBClient = require("../../libs/client");

const client = dynamoDBClient(
  target.region,
  target.accessKeyId,
  target.secretAccessKey
);

module.exports = client;
