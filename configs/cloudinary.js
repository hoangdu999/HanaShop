const cloudinary = require('cloudinary').v2;
const { CLOUDINARY } = require('./configuration');

cloudinary.config({
  cloud_name: CLOUDINARY.CLOUD_NAME,
  api_key: CLOUDINARY.API_KEY,
  api_secret: CLOUDINARY.API_SECRET,
  secure: true,
});

module.exports = cloudinary;
