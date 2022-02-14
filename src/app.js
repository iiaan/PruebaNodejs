const express = require(`express`);
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const path = require("path");

const app = express();

app.set("port", process.env.PORT || 2000);
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs.engine({
    defaultLayout: "main",
    extname: ".hbs",
  })
);

app.set("view engine", ".hbs");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

app.use(require("./routes/index"));

app.use(express.static(path.join(__dirname, "public")));

module.exports = app;
