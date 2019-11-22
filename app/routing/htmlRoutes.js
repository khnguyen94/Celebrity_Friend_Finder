// Import all dependencies
var express = require("express");
var celebs = require("../data/celebs");
var path = require("path");

// Create a route to the homepage
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

// Create a route to the survey page
app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});

// Create a route to display a matched celeb
app.get("/:celeb", function(req, res) {
  // Create a variable to hold user's survey score
  var userSurveyScore = parseInt(req.params.celeb);

  // Create an array to hold all the survey scores of the celebs
  celebSurveyScoreArray = [];

  // Create a function will calculate all the scores for the celebs based on their data
  function calculateCelebScores(arr) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].type === "celebrity") {
        celebSurveyScoreArray.push(arr[i]);
      }
    }
  }

  calculateCelebScores(celebs);

  // Create function that will match userSurveyScore with a value from the celebSurveyScoreArray
  
});



module.exports = allHTMLRoutes;
