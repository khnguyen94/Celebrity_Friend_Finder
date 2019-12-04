// Import all dependencies
var express = require("express");
var router = express.Router();
var path = require("path");
var friends = require("../data/friends");

// Create an API route to display all the celebs
router.get("/api/friends", function(req, res) {
  return res.json(celebs);
});

// Create a route to display a single match celeb, or returns false
router.post("/api/friends", function(req, res) {
  // Get a handle on the information user is sending
  var newFriend = req.body;

  // User RegEx pattern to create routeName property for the newProfile
  newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

  friends.push(newFriend);

  // Create a variable to hold the array of celebrity scores
  var celebScoresArr = [];

  // Create a variable to hold the single array of the newFriend's scores
  var newFriendScoresArr = [];

  // Create a variable to hold the array of combatibility scores (post calculations with the newFriend's data)
  var compatScoresArr = [];

  // Create a variable to hold the new match celeb
  var matchedCeleb;

  // Pull all the scores data from friends and push to the celebScoresArr, use a for loop
  for (var i = 0; i < friends.length - 1; i++) {
    // Create individual array to hold the i'th celeb's scores
    celebScore = [];

    // Assign the new individual array to the the one at the i'th count
    celebScore = friends[i].scores;

    // Push the new individual array into celebScoresArr
    celebScoresArr.push(celebScore);
  }

  // Pull the newFriend's scores into the newFriendScoresArr
  newFriendScoresArr = newFriend.scores;

  console.log("celebs ");
  console.log(celebScoresArr);

  console.log("new friend ");
  console.log(newFriendScoresArr);

  // Create a function that calculates all the differences in scores between celebScoresArr and  newFriendScoresArr
  // Push all the new arrays to compatScoresArr
  function calculateDifferences(celebArr, friendArr, resultsArr) {
    // Loop through each celeb scores array and calculate the difference between that array and the friend's score array
    for (var i = 0; i < celebArr.length; i++) {
      // Create an empty array to hold the difference of the i'th celeb scores and the friend's scores
      var diffArr = [];

      // Create a nested for loop to loop through each number of the i'th celeb's scores
      for (var j = 0; j < celebArr[i].length; j++) {
        // Create a variable to hold the difference number
        var diffNum;

        // Calculat the difference between the two numbers at the matching j'th index
        diffNum = celebArr[i][j] - parseInt(friendArr[j]);

        // Calculate the difference
        diffNum = Math.abs(diffNum);

        // Push that difference to the diffArr
        diffArr.push(diffNum);
      }
      // Push that diffArr to resultsArr
      resultsArr.push(diffArr);
    }
  };

  // Run the calculateDifferences function, pass in all 3 arrays
  calculateDifferences(celebScoresArr, newFriendScoresArr, compatScoresArr);

  // Create a function that will calculate the total sum of each difference array in compatScoresArr

});

module.exports = router;
