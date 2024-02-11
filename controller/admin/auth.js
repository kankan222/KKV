const jwt = require('jsonwebtoken')

exports.signinNow = async (req, res) => {
    if (req.body.user == 'pancha16' && req.body.password == '1234') {
        const token = jwt.sign({ key : 'panchanan' }, 'shhhhh',  { expiresIn: '1h' });
        res.cookie('token', token);
        res.redirect('/admin/school')
    } else {
        res.status(401).send({msg : "Unauthorised user detected!"})
    }
}

exports.checkRoute = async (req, res, next) => {
    const token = req.cookies.token;
    jwt.verify(token, 'shhhhh', (err, decoded) => {
        if (err) {
          return res.status(401).redirect('/login');
        }
        next();   
    })
}