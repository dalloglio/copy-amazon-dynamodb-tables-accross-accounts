const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");

const dynamoDBClient = (region, accessKeyId, secretAccessKey) => {
  return new DynamoDBClient({
    region,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  });
};

module.exports = dynamoDBClient;
