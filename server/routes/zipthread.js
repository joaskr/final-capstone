var express = require("express");
var sqlite3 = require("sqlite3");
var path = require("path");
var router = express.Router();

router.get("/", function (req, res, next) {
  let db = new sqlite3.Database(path.join(__dirname, "ids.db"), (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("Connected to the chinook database.");
    // res.send("API is working properly");
  });
  db.all(`SELECT * FROM zip_threat`, (err, rows) => {
    if (err) {
      console.error(err.message);
    }
    console.log(rows);
    res.send(rows);
  });
});

module.exports = router;
