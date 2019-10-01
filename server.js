const express = require("express");
const bodyPaser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;
const fs = require("fs");

app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({ extended: true }));

const data = fs.readFileSync("./database.json");
const conf = JSON.parse(data);
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
});

app.get("/api/users", (req, res) => {
  connection.query("SELECT * FROM users", (err, rows) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(`query error : ${err}`);
      res.send(err);
    }
  });
});

app.get("/api/todos", (req, res) => {
  connection.query("SELECT * FROM todos", (err, rows) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(`query error : ${err}`);
      res.send(err);
    }
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
