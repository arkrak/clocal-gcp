const Bucket = require('../bucket');

const path = process.argv[2];
const fileName = process.argv[3];
const bucketName = process.argv[4];

const _bucket = new Bucket();
const object = _bucket.uploadObject(path, fileName, bucketName);
console.log(object);
