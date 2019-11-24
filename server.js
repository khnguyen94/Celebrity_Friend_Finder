// Import your dependencies
var express = require("express");
var path = require("path");
var htmlRoutes = require("./app/routing/htmlRoutes");
var apiRoutes = require("./app/routing/apiRoutes");

// Set up the Express App
var app = express();   /// this is an object
var PORT = 3000;

// Set up the Express App to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up Express app to use html and api routes
app.use(htmlRoutes);
app.use(apiRoutes);

// Start the server to begin listening for data passed through the port
app.listen(PORT, function() {
    console.log("Server initated. Listening on PORT " + PORT);
});