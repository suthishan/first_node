const express = require('express');
const imageController = require('../controllers/image.controller');
const imageUploader = require('../helper/imageuploader');


const router = express.Router();

router.post('/venuephotosupload/:vid/:labno',  imageUploader.upload.array('image',10), imageController.upload);

module.exports = router; 