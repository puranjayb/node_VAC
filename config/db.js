const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'nodejs_vac',
    port: '3306'
}).promise();

pool.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Server!');
});

module.exports = pool;


