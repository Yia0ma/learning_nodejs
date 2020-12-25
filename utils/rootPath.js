// Return path of a root directory.
const path = require("path");

module.exports = path.dirname(process.mainModule.filename);