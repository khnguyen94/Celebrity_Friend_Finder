// Import all dependencies
var express = require("express");
var router = express.Router();
var path = require("path");
var friends = require("../data/friends");

// Create an API GET route to display all the celebs
router.get("/api/friends", function(req, res) {
  res.json(friends);
});

// Create and API GET route to display a single celeb
router.get("/api/friends/:friend", function(req, res) {
    // Get a hold on the friend being passed 
    var celebRouteName = req.params.friend; 

    console.log(celebRouteName);

    // Find the matchedCeleb in the data
    for (var i = 0; i < friends.length; i++) {
        if (celebRouteName === friends[i].routeName) {
          res.json(friends[i]);
        }
      }
    
      res.json(false);
});

// Create an API POST route to display a single match celeb, or returns false
router.post("/api/friends", function(req, res) {
  // Get a handle on the information user is sending
  var newFriend = req.body;

  // User RegEx pattern to create routeName property for the newProfile
  newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

  friends.push(newFriend);

  res.json(true);
});

module.exports = router;
