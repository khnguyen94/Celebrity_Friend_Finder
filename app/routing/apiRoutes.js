// Create an API GET route that displays all existing singles
app.get("/api/singles", function(req, res) {
    return res.json(singles);
});

// Create an API GET route that displays the matched single to the user after their survey results are submitted, or return false
app.get("/api/singles", function(req, res) {
    var matchedSingle = req.params.singles;

    console.log(matchedSingle);

    for (var i = 0; i < singles.length; i++) {
        if (matchedSingle === singles[i].routeName) {
            return res.json(singles[i]);
        }
    }

    // Else return false
    return res.json(false);
});

// Create an API POST route that adds the new user (as indicated by survey submission) to the data
app.post("/api/singles", function(req, res) {
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
