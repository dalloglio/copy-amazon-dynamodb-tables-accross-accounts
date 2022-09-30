const config = {
  source: {
    region: process.env.SOURCE_REGION,
    tableName: process.env.SOURCE_TABLE_NAME,
    accessKeyId: process.env.SOURCE_ACCESS_KEY_ID,
    secretAccessKey: process.env.SOURCE_SECRET_ACCESS_KEY,
  },
  target: {
    region: process.env.TARGET_REGION,
    tableName: process.env.TARGET_TABLE_NAME,
    accessKeyId: process.env.TARGET_ACCESS_KEY_ID,
    secretAccessKey: process.env.TARGET_SECRET_ACCESS_KEY,
  },
};

module.exports = config;
