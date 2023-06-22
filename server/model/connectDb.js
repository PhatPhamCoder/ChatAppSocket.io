const mysql = require("mysql2");
const dbconfig = require("../config/DbConnect");

const connection = mysql.createPool({
  host: dbconfig.HOST,
  user: dbconfig.USER,
  password: dbconfig.PASSWORD,
  database: dbconfig.DATABASE,
  port: dbconfig.PORT,
});

connection.getConnection(function (err, connection) {
  if (err) {
    throw err;
  }
  console.log("🚦 Database is Connected");
});

module.exports = connection;
