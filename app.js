const path = require("path");

const express = require("express");

const app = express();

const homeRouter = require("./routes/home");
const userRouter = require("./routes/users");

app.set("view engine", "ejs");
app.set("views", "views");

app.use("/", homeRouter);
app.use("/users", userRouter);

// Include static directory.
app.use(express.static(path.join(__dirname, "public")));

app.listen(3000);