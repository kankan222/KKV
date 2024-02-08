const express = require('express');
const router = express.Router()
const controlls = require('../../controller/admin/adm.controll')
const multer = require('multer')
const path = require('path')
const rootPath = process.cwd();

router.use(express.urlencoded({extended: true}))

const storage = multer.diskStorage({
   destination: function (req, file, cb) {cb(null, path.join(rootPath, 'static/assets/school-st'));},
   filename: function (req, file, cb) {
     cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname);
   },
 });
 
 const upload = multer({ storage: storage })

 const photoField = [
   { name: 'sst-photo', maxCount: 1 },
   { name: 'sbc-photo', maxCount: 1 }
 ]

router.post('/school-student-form', upload.fields(photoField), controlls.schoolStudentsForm)

// school admission form data to admin

router.get('/admin/school', controlls.renderSchoolFormData)
router.get('/get-each-school-student-data', controlls.getEachSchoolStudentData)

module.exports = router;