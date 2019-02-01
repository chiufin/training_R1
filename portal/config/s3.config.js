const AWS = require('aws-sdk');

// two ways to use aws crediential
  // 1. from .env
  // 2. from ~/.aws/credentials
  
let s3bucket = new AWS.S3({
    accessKeyId: process.env.IAM_USER_KEY,
    secretAccessKey: process.env.IAM_USER_SECRET
});


module.exports = s3bucket
