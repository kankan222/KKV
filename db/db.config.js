const mysql = require('mysql')

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Phpmyadmin@1234567890',
    database: 'kkv_db',
})

conn.connect((err) => {
    if (!err) {
        console.log('connected to datbase!')
    } else {
        console.log('there is an error bro!' + err)
    }
})

module.exports = conn