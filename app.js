const express = require("express");

const app = express();

app.use("/users", (req, res, next) => {
    console.log("Route displaying list of users.");
    res.send("<h1>List of Users</h1>");
});

app.use("/", (req, res, next) => {
    console.log("Home page route.");
    res.send("<h1>Hope Page</h1>");
});

app.listen(3000);