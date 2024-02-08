const express = require('express');
const router = express.Router();
const path = require('path')


router.get('/', (req, res) => {
    res.status(200).render(path.join(__dirname, '../views/school.index.ejs'))
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
router.get('/school-staff', (req, res) => {
    res.status(200).render(path.join(__dirname, '../views/SCHOOL/staff.ejs')
    
    )
})
router.get('/school-facilities', (req, res) => {
    res.status(200).render(path.join(__dirname, '../views/SCHOOL/facilities.ejs')

    )
})
router.get('/school-gallery', (req, res) => {
    res.status(200).render(path.join(__dirname, '../views/SCHOOL/gallery.ejs')

    )
})

router.get('/school-admissionForm', (req, res) => {
    res.status(200).render(path.join(__dirname, '../views/SCHOOL/admissionForm.ejs')

    )
})

router.get('/school-contact', (req, res) => {
    res.status(200).render(path.join(__dirname, '../views/SCHOOL/contact.ejs')

    )
})
module.exports = router;