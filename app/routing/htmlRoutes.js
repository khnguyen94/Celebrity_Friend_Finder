// Import all dependencies
var express = require("express");
var path = require("path");

// Create a route to the homepage
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

// Create a route to the survey page
app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});



