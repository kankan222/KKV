const express = require('express');
const router = express.Router();
const path =require('path')
const db = require('../db/db.config')

router.get('/home', async (req, res) => {
    const q = `select * from collgallery order by img_id desc limit 4;`
    await db.query(q, (err, results) => {
        if (!err) {
          res.status(200).render(path.join(__dirname,'../views/college.index.ejs'), {results})
        }
    })
})
router.get('/about-us', (req, res) => {
    res.status(200).render(path.join(__dirname,'../views/main-pages/aboutUs.ejs'))
})
router.get('/chief-advisor', (req, res) => {
    res.status(200).render(path.join(__dirname,'../views/main-pages/chiefadvisor.ejs'))
})
router.get('/rector', (req, res) => {
    res.status(200).render(path.join(__dirname,'../views/main-pages/rector.ejs'))
})
router.get('/principal', (req, res) => {
    res.status(200).render(path.join(__dirname,'../views/main-pages/principal.ejs'))
})
router.get('/vice-principal', (req, res) => {
    res.status(200).render(path.join(__dirname,'../views/main-pages/vice-principal.ejs'))
})
router.get('/academic', (req, res) => {
    res.status(200).render(path.join(__dirname,'../views/main-pages/academic.ejs'))
})
router.get('/advisor', (req, res) => {
    res.status(200).render(path.join(__dirname,'../views/main-pages/advisor.ejs'))
})
router.get('/staff', async (req, res) => {
    const q = `select * from college_stuff;`
    await db.query(q, (err, results) => {
        if (!err) {
          res.status(200).render(path.join(__dirname,'../views/pages/staff.ejs'), {results})
        }
    })
   
})
router.get('/fee-structure', (req, res) => {
    res.status(200).render(path.join(__dirname,'../views/pages/feeStructure.ejs'))
})
router.get('/rules', (req, res) => {
    res.status(200).render(path.join(__dirname,'../views/pages/rules.ejs'))
})
router.get('/facilities', (req, res) => {
    res.status(200).render(path.join(__dirname,'../views/pages/facilities.ejs'))
})
router.get('/contact', (req, res) => {
    res.status(200).render(path.join(__dirname,'../views/pages/contactus.ejs'))
})

router.get('/collegepdf', (req, res) => {
    res.status(200).render(path.join(__dirname, '../views/admission/collegePDF.ejs'))
})



module.exports = router;