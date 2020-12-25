const express = require("express");

const app = express();

const homeRouter = require("./routes/home");
const userRouter = require("./routes/user");

app.use("/", homeRouter);
app.use("/users", userRouter);

app.listen(3000);