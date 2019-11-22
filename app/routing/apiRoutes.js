// Import all dependencies
var express = require("express");
var path = require("path");
var celebs = "../data/celebs"

// Create an API route to display all the celebs
app.get("/api/celebs", function(req, res) {
    return res.json(celebs);
});


// Create a route to display a matched celeb, or returns false
app.get("/api/celebs/:celeb", function(req, res) {
    // Create a variable to hold user's survey score
    var userSurveyScore = parseInt(req.params.celeb);

    console.log(userSurveyScore);
  
    // Create an array to hold all the survey scores of the celebs
    celebSurveyScoreArray = [];
  
    // Create a function will calculate all the scores for the celebs based on their data and push to celebSurveyScoreArray
    function calculateCelebScores(arr) {
      for (var i = 0; i < arr.length; i++) {
        // Create an array to hold current celeb survey score
        celebSurveyScore = celebs[i].scores;

        // Create an empty array to hold objects, each object will have 

        if (arr[i].type === "celebrity") {
          celebSurveyScoreArray.push(arr[i]);
        }
      }
    };
  
    calculateCelebScores(celebs);
  
    // Create function that will match userSurveyScore with a value from the celebSurveyScoreArray
    
  });






// Create a function that holds all the API routes
function allAPIRoutes(app) {
  // Create an API GET route that displays all existing singles
  app.get("/api/singles", function(req, res) {
    res.json(singles);
  });

  // Create an API GET route that displays the matched single to the user after their survey results are submitted, or return false
//   app.get("/api/singles/:singles", function(req, res) {
//     var matchedSingle = req.params.singles;

//     console.log(matchedSingle);

//     for (var i = 0; i < singles.length; i++) {
//       if (matchedSingle === singles[i].routeName) {
//         return res.json(singles[i]);
//       }
//     }

//     // Else return false
//     return res.json(false);
//   });

  // Create an API POST route that adds the new user (as indicated by survey submission) to the data
  app.post("/api/singles", function(req, res) 
  {
     // var id = req.params.id
     // var city = req.params.city
      /// we receive the name / pic / scores (responses to all the questions)
      var surveysingle = req.body;
console.log(surveysingle)
      // then you need to compare the scores with all the scores on your file
      // then you need to respond to your frontend with the best match

    // Middleware parses it so that req.body is equivalent to JSON post sent by user
    var newSingle = req.body;

    // Format newSingle's route pathway, use RegEx
    newSingle.routeName = newSingle.name.replace(/\s+/g, "").toLowerCase();

    console.log(newSingle);

    // Push that newSingle to the singles array
    singles.push(newSingle);

    // Return newSingle in JSON format
    res.json(newSingle);
  });
}
