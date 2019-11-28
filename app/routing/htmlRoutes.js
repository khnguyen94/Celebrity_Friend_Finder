// Import all dependencies
var express = require("express");
var router = express.Router();
var path = require("path");

// Create a route to the homepage
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

// Create a route to the survey page
router.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});

module.exports = router;

