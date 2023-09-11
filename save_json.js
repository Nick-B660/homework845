const fs = require("fs");
const path = require("path");
const AWS = require("aws-sdk");
const s3 = new AWS.S3()

const save = async (favNumber) => {
  console.log("saving");

await s3.putObject({
  Body: JSON.stringify(favNumber, null, 2),
  Bucket: "cyclic-perfect-erin-bat-eu-west-2",
  Key: "some_files/my_file.json",
}).promise()


};

module.exports = { save };