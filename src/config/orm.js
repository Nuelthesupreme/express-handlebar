const connection = require("./connection");

const orm = {
  all: function(tableInput, cb) {
    const queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: function(table, columns, values, cb) {
     const query = `INSERT INTO ${table}(${columns}) VALUES ("${values}")`;

    connection.query(query, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    })
  },
  update: function (id, cb) {
    const query = `UPDATE burgers SET devoured=TRUE WHERE id=${i}`;
    connection.query(query, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    })
  }
}

module.exports = orm;
