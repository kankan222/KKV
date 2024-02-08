const express = require('express');
const path = require('path');
const router = express.Router();
const galleryCon = require('../../controller/admin/adm.controll')
const multer  = require('multer')
const rootPath = process.cwd();

router.get('/coll-gallery', galleryCon.collegeGallery)

module.exports = router;