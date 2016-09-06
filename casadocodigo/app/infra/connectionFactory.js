var mysql = require('mysql');

var connectMYSQL = function createDBConnection() {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'default'
  });
}

module.exports = function() {
  return connectMYSQL;
}
