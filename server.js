// Import your dependencies
var express = require("express");

// Set up the Express App
var app = express();   /// this is an object
var PORT = 3000;

// Set up the Express App to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import routes as additional methods to app
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Start the server to begin listening for data passed through the port
app.listen(PORT, function() {
    console.log("Server initated. Listening on PORT " + PORT);
});