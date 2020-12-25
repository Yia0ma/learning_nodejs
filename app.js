const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const homeRouter = require("./routes/home");
const usersRouter = require("./routes/users");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false}));

app.use("/", homeRouter);
app.use("/users", usersRouter);

app.listen(3000);