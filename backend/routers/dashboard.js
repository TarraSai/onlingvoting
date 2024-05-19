const express = require("express");
const verifyToken = require('./Authmiddleware');

const router = express.Router();

router.get("/dashboard", verifyToken, (req, res) => {
  res.json({ message: "Welcome to the dashboard", userId: req.userId });
});

module.exports = router;
