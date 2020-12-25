const express = require("express");

const app = express();

const homeRouter = require("./routes/home");
const userRouter = require("./routes/users");

app.use("/", homeRouter);
app.use("/users", userRouter);

app.listen(3000);