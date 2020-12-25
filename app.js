const path = require("path");

const express = require("express");

const app = express();

const homeRouter = require("./routes/home");
const userRouter = require("./routes/users");

// Routes.
app.use("/", homeRouter);
app.use("/users", userRouter);

// including static files.
app.use(express.static(path.join(__dirname, "public")));

app.listen(3000);