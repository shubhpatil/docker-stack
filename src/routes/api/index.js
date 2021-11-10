const express = require("express");
const Users = require("../../model/users");

const router = express.Router();

const PORT = process.env.PORT || 5000;

// INITIAL ROUTE
router.get("/appID", (req, res) => {
  res.json({
    message: PORT,
    status: 200,
  });
});

// GET MONGO DB DATA
router.get("/getData", async (req, res) => {
  const data = await Users.find();
  res.json({
    users: data,
  });
});

module.exports = router;
