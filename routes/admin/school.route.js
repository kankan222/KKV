const express = require('express');
const router = express.Router()
const controlls = require('../../controller/admin/adm.controll')
const multer = require('multer')
const path = require('path');
const { checkRoute } = require('../../controller/admin/auth');
const rootPath = process.cwd();

const storage = multer.diskStorage({
   destination: function (req, file, cb) {cb(null, path.join(rootPath, 'static/assets/school-st'));},
   filename: function (req, file, cb) {
     cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname);
   },
 });

 const storageStaff = multer.diskStorage({
  destination: function (req, file, cb) {cb(null, path.join(rootPath, 'static/assets/stuff-img'));},
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname);
  },
});
 
 const upload = multer({ storage: storage })
 const uploadStuff = multer({ storage: storageStaff })

 const photoField = [
   { name: 'sst-photo', maxCount: 1 },
   { name: 'sbc-photo', maxCount: 1 }
 ]



router.post('/school-student-form', upload.fields(photoField), controlls.schoolStudentsForm)

// school admission form data to admin ------------------
router.get('/admin/school', checkRoute, controlls.renderSchoolFormData)
router.get('/get-each-school-student-data', controlls.getEachSchoolStudentData)

//school stuff route -----------------
router.get('/school-stuff-edit', checkRoute, controlls.renderSchoolStuff)
router.post('/school-stuff-add',  uploadStuff.single('stuff-img'), controlls.addSchoolStuff)
router.delete('/school-stuff-delete', controlls.deleteSchoolStuff)
router.put('/school-stuff-update', uploadStuff.single('stuff-img'), controlls.updateSchoolStuff)

module.exports = router;