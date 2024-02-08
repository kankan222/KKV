const express = require('express');
const path = require('path');
const router = express.Router();
const collCon = require('../../controller/admin/adm.controll')
const multer  = require('multer')
const rootPath = process.cwd();

const storage = multer.diskStorage({
   destination: function (req, file, cb) {cb(null, path.join(rootPath, 'static/assets/college-st'));},
   filename: function (req, file, cb) {
     cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname);
   },
 });

const upload = multer({ storage: storage })
const photoField = [
    { name: 'st-photo', maxCount: 1 },
    { name: 'bc-photo', maxCount: 1 },
    { name: 'ms-photo', maxCount: 1 },
    { name: 'sc-photo', maxCount: 1 }
  ]

router.post('/college-form', upload.fields(photoField), collCon.collegeAdmission)

//get college student dashboard-----------
router.get('/admin/college', collCon.renderCollegeFormData)
router.get('/per-college-student-data', collCon.getEachCollegeStudentData)

//college stuff route

router.post('/college-stuff-add', collCon.addCollegeStuff)

module.exports = router

