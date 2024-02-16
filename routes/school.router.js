const express = require('express');
const router = express.Router();
const path = require('path');
const db = require('../db/db.config')
const { schoolGalleryRender } = require('../controller/admin/adm.controll');


router.get('/', async (req, res) => {
    const q = `select * from gallery order by img_id desc limit 4;`
    await db.query(q, (err, results) => {
        if (!err) {
            res.status(200).render(path.join(__dirname, '../views/school.index.ejs'), {results})
        }
    })
})
router.get('/school-aboutUs', (req, res) => {
    res.status(200).render(path.join(__dirname, '../views/SCHOOL/main/aboutUs.ejs'))
})
router.get('/school-principal', (req, res) => {
    res.status(200).render(path.join(__dirname, '../views/SCHOOL/main/principal.ejs')

    )
})
router.get('/school-rector', (req, res) => {
    res.status(200).render(path.join(__dirname, '../views/SCHOOL/main/rector.ejs')

    )
})
router.get('/school-chief-advisor', (req, res) => {
    res.status(200).render(path.join(__dirname, '../views/SCHOOL/main/chief-advisor.ejs')

    )
})
router.get('/school-administrator', (req, res) => {
    res.status(200).render(path.join(__dirname, '../views/SCHOOL/main/administrator.ejs')

    )
})

router.get('/school-vice-principal', (req, res) => {
    res.status(200).render(path.join(__dirname, '../views/SCHOOL/main/vice-principal.ejs')

    )
})
router.get('/school-academic', (req, res) => {
    res.status(200).render(path.join(__dirname, '../views/SCHOOL/main/academic.ejs')

    )
})

router.get('/school-fee-structure', (req, res) => {
    res.status(200).render(path.join(__dirname, '../views/SCHOOL/fee-structure.ejs')

    )
})
router.get('/school-rules', (req, res) => {
    res.status(200).render(path.join(__dirname, '../views/SCHOOL/rules.ejs')

    )
})
router.get('/school-staff', async (req, res) => {
   const q = `select * from school_stuff;`
   await db.query(q, (err, results) => {
    if (!err) {
        res.status(200).render(path.join(__dirname, '../views/SCHOOL/staff.ejs'), {results})
    }else {
        res.status(500).redirect('/fh')
    }
   })
})
router.get('/school-facilities', (req, res) => {
    res.status(200).render(path.join(__dirname, '../views/SCHOOL/facilities.ejs')

    )
})
router.get('/school-gallery', schoolGalleryRender)

router.get('/school-admissionForm', (req, res) => {
    res.status(200).render(path.join(__dirname, '../views/SCHOOL/admissionForm.ejs')

    )
})

router.get('/school-contact', (req, res) => {
    res.status(200).render(path.join(__dirname, '../views/SCHOOL/contact.ejs'))
})

router.get('/schoolpdf', (req, res) => {
    res.status(200).render(path.join(__dirname, '../views/SCHOOL/thankYou.ejs'))
})


module.exports = router;