"use strict";

const mysql = require("mysql");
const env = require("./env.js")();

module.exports = executeQuery;

const DB = mysql.createConnection({
  host: env.host,
  user: env.user,
  password: env.password,
  database: env.database,
});

function executeQuery(sql, callback) {
  DB.query(sql, callback);
}
