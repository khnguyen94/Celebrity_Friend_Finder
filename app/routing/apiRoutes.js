// Import all dependencies
var express = require("express");
var path = require("path");
var friends = "../data/friends"

// Create an API route to display all the celebs
app.get("/api/friends", function(req, res) {
    return res.json(celebs);
});

// Create a route to display a single match celeb, or returns false
app.post("/api/friends", function(req, res) {
    // Get a handle on the information user is sending
    var newProfile = req.body;

    // User RegEx pattern to create routeName property for the newProfile
    newProfile.routeName = newProfile.name.replace(/\s+/g, "").toLowerCase();

    console.log(newProfile);

    friends.push(newProfile);
  
    res.json(newProfile);

    // Create an array to hold all the arrays of celeb scores
    var celebScoresArr = [];

    // Use for loop to push each celeb scores array to celebScoresArr
    for (var i = 0; i < friends.length() - 1; i++) {
        celebScoresArr.push(friends[i].scores);
    }

    // console.log(celebScoresArr);

    // Create a new array to hold array of score differences between each celeb and the user
    var differences = [];

    // Loop through the entire celebScoresArr and get the difference array between the each celeb and the user
    for (var i = 0; i < celebScoresArr.length() - 1; i++) {
        // Create a newDiff object
        var newDiff = {};

        // Create a new id variable
        var newDiffArrID = i;

        // Create a new array that holds difference array for each celeb/user difference
        var newDiffArr = [];

        // Loop through each celeb score array in the larger container array and find the difference between each value compares to the user's scores
        for (var j = 0; j < celebScoresArr[i].length; j++) {
            // Create a new variable to hold difference number
            var diffNum = 0;

            // Calculate the difference of scores for each question
            diffNum = Math.abs(newProfile.scores[j] - celebScoresArr[i][j]);

            // Push that number to diffArr
            newDiffArr.push(diffNum);
        }
        
        
        // Create an variable to hold sumDifferences
        var newSumDifference = 0;

        // Calculate the sum of all numbers in each newDiffArr 
        for (var i = 0; i < newDiffArr.length; i++) {
            newSumDifference += newDiffArr[i];
        };


        // Assign id and arr as properties difference object
        newDiff.id = newDiffArrID; 
        newDiff.diff = newSumDifference;

        // Push newDiff into differences array
        differences.push(newDiff);
    };

    console.log(differences);

    // Create a function that which object in the differences arr has the lowest differences (best match), returns the match celeb
    function getMatch(arr) {
        // Create a variable that will hold the matched celeb
        var matchedCeleb; 

        // Create an array that will hold just the differences in scores
        var justDiffArr = []; 

        // Loop through the entire differences arr and push each differences into the justDiffArr
        for (var i = 0; i < differences.length; i++) {
            // Create a variable to hold difference value, assign it to the diff value at that difference index
            var diffValue = differences[i].diff;

            // Push diffValue to justDiffArr
            justDiffArr.push(diffValue);
        };

        // Find the lowest difference value in justDiffArr 
        var lowestDiff = Math.min(...justDiffArr);

        // Find the index of that lowest difference value, loop through the entire array of differences
        for (var i = 0; i < differences.length; i++) {
            if (differences[i].diff = lowestDiff) {
                matchedCeleb = friends[i].routeName;
            }
        };

        return matchedCeleb;
    };

    // Run getMatch function
    getMatch(differences); 

    // Use that matchedCeleb's routeName to return to user the matchedCeleb's JSON
    
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
