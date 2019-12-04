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

    console.log(newFriend);

    // User RegEx pattern to create routeName property for the newProfile
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

    // console.log(newFriend);

    friends.push(newFriend);
  
    res.json(newFriend);
});

module.exports = router; 