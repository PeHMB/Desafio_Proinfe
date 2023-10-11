const mysql = require('mysql2');

// create the connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'proinfe_desafio',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// export the pool
module.exports = pool;
