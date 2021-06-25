var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
const rootRouter = express.Router();

var arppoison = require("./routes/arppoison");
var synflood = require("./routes/synflood");
var zipthread = require("./routes/zipthread");

var app = express();

const whitelist = [
  "http://localhost:3000",
  "http://localhost:3001",
  "https://shrouded-dawn-61849.herokuapp.com",
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
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/arppoison", arppoison);
app.use("/synflood", synflood);
app.use("/zipthread", zipthread);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (res, req) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
  rootRouter.get("(/*)?", async (req, res, next) => {
    res.sendFile(path.join(__dirname + "/client/src/index.html"));
  });
  app.use(rootRouter);
}

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
