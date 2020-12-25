const path = require("path");

const express = require("express");

const rootPath = require("../utils/rootPath");

const router = express.Router();

router.get("/", (req, res) => {
    res.render("users");
});

module.exports = router;