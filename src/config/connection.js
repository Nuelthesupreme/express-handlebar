const mysql = require("mysql");

const dbOptions = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password1!",
  database: "burgers_db",
  multipleStatements: true,
};

const connection = mysql.createConnection(dbOptions);

const onConnect = (err) => {
  if (err) throw err;
  console.log("Successfully connected to the DB");
};

connection.connect(onConnect);

module.exports = connection;