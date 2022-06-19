const { S3Client } = require("@aws-sdk/client-s3");

const S3Instance = new S3Client({
  region: "ap-south-1",
  credentials: {
    accessKeyId: process.env.AWSAccessKeyId,
    secretAccessKey: process.env.AWSSecretKey,
  },
});

module.exports = { S3Instance };
