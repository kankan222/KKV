const mysql = require('mysql')

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'kkv_db',
    // port: 3307
})

conn.connect((err) => {
    if (!err) {
        console.log('connected to datbase!')
    } else {
        console.log('there is an error bro!' + err)
    }
})

module.exports = conn