const express = require('express');
const router = express.Router()
const cookieParser = require('cookie-parser');
const fs = require('fs');
const { signinNow } = require('../../controller/admin/auth');
router.use(cookieParser())
router.use(express.urlencoded({extended: true}))
router.use(express.json())


const logininfo = fs.readFileSync('data/credentials.json')
const loginfoparse = JSON.parse(logininfo)

router.get('/login', (req, res) => {
    res.render('./admin/login')
})

router.post('/login/loginfo', signinNow);



module.exports = router;

