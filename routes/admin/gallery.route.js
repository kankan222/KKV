const express = require('express');
const path = require('path');
const router = express.Router();
const galleryCon = require('../../controller/admin/adm.controll')
const multer = require('multer');
const { checkRoute } = require('../../controller/admin/auth');
const rootPath = process.cwd();

const storage = multer.diskStorage(
    {
        destination: function (req, file, cb) { cb(null, path.join(rootPath, 'static/assets/school-gallery')); },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname);
        },
    }
)

const storageColl = multer.diskStorage(
    {
        destination: function (req, file, cb) { cb(null, path.join(rootPath, 'static/assets/college-gallery')); },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname);
        },
    }
)

const upload = multer({ storage: storage })
const uploadColl = multer({ storage: storageColl })

router.get('/coll-gallery', galleryCon.collegeGallery)
router.post('/insert-college-gallery', uploadColl.array('coll-gallery', 20), galleryCon.insertImageToCollegeGallery)
router.delete('/delete-college-gallery', galleryCon.deleteImagefromCollegeGallery)


router.get('/school-gallery', checkRoute, galleryCon.schoolGallery)
router.post('/insert-school-gallery', upload.array('scl-gallery', 20), galleryCon.insertImageToGallery)
router.delete('/delete-school-gallery', galleryCon.deleteImagefromGallery)

module.exports = router;