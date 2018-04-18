const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./routes/apiRoutes");
// for sequelize ORM
const db = require("./models");
// for passport and authentication
const session = require("express-session");
const passport = require("./config/passport");

// Serve up static assets
app.use(express.static("client/build"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// Use apiRoutes
app.use("/api", apiRoutes);

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

db.sequelize.sync().then(function(){
  app.listen(PORT, function(){
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });
});