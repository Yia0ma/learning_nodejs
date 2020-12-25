const path = require("path");

const express = require("express");

const rootPath = require("../utils/rootPath");

const router = express.Router();

const users = [];

router.get("/", (req, res) => {
    res.render("users", {pageTitle: "Users", users: users});
});

router.post("/add-user", (req, res) => {
    users.push(req.body.user);
    res.redirect("/users");
});

module.exports = router;