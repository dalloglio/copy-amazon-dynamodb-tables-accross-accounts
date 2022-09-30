# Copy Amazon DynamoDB tables across accounts using a custom implementation

This is a very specific use case where I needed to copy Amazon DynamoDB tables across accounts using a custom implementation.

This code has limitations and does not work with large tables.

For more details, see the [documents](https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/copy-amazon-dynamodb-tables-across-accounts-using-a-custom-implementation.html) in Amazon AWS Documentation.

## Requirements

- AWS Credentials of two active AWS accounts
- DynamoDB tables in both the accounts
- NodeJs 16

## How to run?

- Intall de dependencies

```bash
npm i
```

- Create and set the environment variables for both the AWS accounts in the `.env` file

```bash
# SOURCE
SOURCE_REGION=
SOURCE_TABLE_NAME=
SOURCE_ACCESS_KEY_ID=
SOURCE_SECRET_ACCESS_KEY=

# TARGET
TARGET_REGION=
TARGET_TABLE_NAME=
TARGET_ACCESS_KEY_ID=
TARGET_SECRET_ACCESS_KEY=
```

- Finally, run the code to perform a copy tables across accounts

```bash
node index.js
```
