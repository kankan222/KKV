const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/admission-form', (req, res) => {
    res.status(200).render(path.join(__dirname,'../views/admission/admissionForm.ejs'))
})
router.get('/gallery', (req, res) => {
    res.status(200).render(path.join(__dirname,'../views/gallery/gallery.ejs'))
})
router.get('/cs', (req, res) => {
    res.status(200).render(path.join(__dirname,'../views/cs/coms.ejs'))
})




module.exports = router;