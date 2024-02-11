const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const mainRoute = require('./routes/index-route');
const schoolRoute = require('./routes/school.router');
const panels = require('./routes/panels');
const body = require('body-parser');
const log = require('./routes/admin/login');
const schoolDashboard = require('./routes/admin/school.route')
const collegeDashboard = require('./routes/admin/college.route')
const galleryDashboard = require('./routes/admin/gallery.route')
const cookieParser = require('cookie-parser')
require('./controller/admin/auth');


app.use('/static', express.static(path.join(__dirname, 'static')));
app.use(express.urlencoded({ extended: true }));
app.use(body.json());
app.use(cookieParser())
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.get('/', (req, res) => {
    res.status(200).render('index');
});
app.use(mainRoute);
app.use('/school',schoolRoute);
app.use(panels);
app.use(log);
app.use(schoolDashboard)
app.use(collegeDashboard)
app.use(galleryDashboard)

app.get('*', (req, res) => {
    res.render('./admin/error');
});
app.listen(port, () => { console.log('This site is running on port ' + port) });