var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var arppoison = require("./routes/arppoison");
var synflood = require("./routes/synflood");
var zipthread = require("./routes/zipthread");

var app = express();

const whitelist = [
  "http://localhost:3000",
  "http://localhost:3001",
  "mpsafe.herokuapp.com",
];
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin);
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable");
      callback(null, true);
    } else {
      console.log("Origin rejected");
      callback(new Error("Not allowed by CORS"));
    }
  },
};

// view engine setup

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "client/build")));
app.use("/arppoison", arppoison);
app.use("/synflood", synflood);
app.use("/zipthread", zipthread);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.get("/*", (res, req) => {
  res.sendFile(path.join(__dirname + "client/build/index.html"));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
