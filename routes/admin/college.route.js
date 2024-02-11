const express = require('express');
const path = require('path');
const router = express.Router();
const collCon = require('../../controller/admin/adm.controll')
const multer  = require('multer');
const { checkRoute } = require('../../controller/admin/auth');
const rootPath = process.cwd();

const storage = multer.diskStorage({
   destination: function (req, file, cb) {cb(null, path.join(rootPath, 'static/assets/college-st'));},
   filename: function (req, file, cb) {
     cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname);
   },
 });
 const storageForStuff = multer.diskStorage({
  destination: function (req, file, cb) {cb(null, path.join(rootPath, 'static/assets/college-stuff-img'));},
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage: storage })
const uploadForStuff = multer({ storage: storageForStuff })
const photoField = [
    { name: 'st-photo', maxCount: 1 },
    { name: 'bc-photo', maxCount: 1 },
    { name: 'ms-photo', maxCount: 1 },
    { name: 'sc-photo', maxCount: 1 }
  ]

router.post('/college-form', upload.fields(photoField), collCon.collegeAdmission)

//get college student dashboard-----------
router.get('/admin/college', checkRoute, collCon.renderCollegeFormData)
router.get('/per-college-student-data', collCon.getEachCollegeStudentData)

//college stuff route
router.get('/college-stuff', checkRoute, collCon.renderCollegeStuffEdit)
router.post('/college-stuff-add', uploadForStuff.single('coll-stuff-img'), collCon.addCollegeStuff)
router.delete('/college-stuff-delete', collCon.deleteCollegeStuff)
router.put('/college-stuff-update', uploadForStuff.single('coll-stuff-img'), collCon.updateCollegeStuff)

module.exports = router

