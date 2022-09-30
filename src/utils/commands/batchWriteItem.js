const { BatchWriteItemCommand } = require("@aws-sdk/client-dynamodb");
const { target } = require("../../config");

const transformToRequestItems = (requestItems) => {
  return {
    [target.tableName]: requestItems.map((item) => {
      return {
        PutRequest: {
          Item: { ...item },
        },
      };
    }),
  };
};

const command = (requestItems) => {
  return new BatchWriteItemCommand({
    RequestItems: transformToRequestItems(requestItems),
  });
};

module.exports = command;
