const express = require('express');
const router = express.Router();
const path = require('path');
const db = require('../db/db.config')


router.get('/admission-form', (req, res) => {
    res.status(200).render(path.join(__dirname,'../views/admission/admissionForm.ejs'))
})
router.get('/gallery', async (req, res) => {
    const q = `select * from collgallery;`
    await db.query(q, (err, results) => {
        if (!err) {
            res.status(200).render(path.join(__dirname,'../views/gallery/gallery.ejs'), {results}) 
        }else {
            res.redirect('/eroror')
        }
    })
   
})
router.get('/cs', (req, res) => {
    res.status(200).render(path.join(__dirname,'../views/cs/coms.ejs'))
})




module.exports = router;