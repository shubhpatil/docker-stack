const express = require("express");
const index = require("./api/index");

const router = express.Router();

// ROUTES
router.use("/", index);

module.exports = router;
