var mysql = require("mysql");
require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const host = "0.0.0.0";

app.get("/", (req, res) => {
  var con = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
  });

  con.connect(function (err) {
    if (err) throw err;
    res.send("Connected!");
  });
});

app.listen(port, host, () => {
  console.log(`Example app listening on http://${host}:${port}. MySQL database is "${process.env.MYSQL_DATABASE}"`);
});
