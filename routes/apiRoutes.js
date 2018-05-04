const axios = require("axios");
const router = require("express").Router();
const passport = require("../config/passport");

const db = require("../models/");

const Sequelize = require('sequelize');
// const sequelize = new Sequelize({
//     database: 'two_cents_db',
//     username: 'root',
//     password: '',
//     dialect: 'mysql'
//   });

const Op = Sequelize.Op;
var env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const sequelize = new Sequelize(config.database, config.username, config.password, config);

// if (config.use_env_variable) {
//     const sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//     const sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

// GET ALL DESTINATIONS FROM DATABASE TO POPULATE THE DESTINATION PULLDOWN MENU ON CREATE DESTINATION PAGE
router.get("/destinations", (req, res) => 
    db.Destination.findAll({
        order: [['name', 'ASC']]
    }).then(dbDestination =>
        res.json(dbDestination))
);

// GET ALL DESTINATIONS THE USER CREATED A PERSONAL PAGE FOR ON CREATE POI FORM
router.get("/destinations/:userID", (req, res) => 
    db.UserDestinations.findAll({ 
        where: {user_id : req.params.userID},
        order: [['destination', 'ASC']]
     }).then(data =>
        res.json(data))
);

// GET ALL THE USER'S POIs FOR A GIVEN DESTINATION
router.get("/poi/:user/:destination", (req, res) => 
    db.POI.findAll({
        where: {
            user_id : req.params.user,
            destination: req.params.destination
        }
    }).then(data =>
        res.json(data))
);

// THIS POST CREATES A PERSONAL DESTINATION PAGE FOR THE USER
// THE USER MUST CREATE A PAGE BEFORE THEY CAN POST A POI TO IT
router.post("/userDestinations", (req, res) =>
    db.UserDestinations.create({
        "user_id": req.body.user_id,
        "destination": req.body.destination,
        "notes": req.body.notes,
        "image_url": req.body.image_url
    }).then(dbUserDestinations =>
        res.json(dbUserDestinations))
);

// THIS POST ROUTE SAVES A POI TO THE DB FOR A USER
router.post("/poi", (req, res) =>
    db.POI.create({
        "user_id": req.body.user_id,
        "destination": req.body.destination,
        "poi_type": req.body.poi_type,
        "poi_name": req.body.poi_name,
        "poi_address": req.body.poi_address,
        "poi_description": req.body.poi_description,
        "poi_image_url": req.body.poi_image_url
    }).then(dbPOI =>
        res.json(dbPOI))
);

// ROUTE FOR ADMIN TO ADD DESTINATIONS USERS CAN POST ABOUT
router.post("/add/destination", (req, res) =>
    db.Destination.create({
        "name": req.body.name,
        "coord_lat": req.body.coord_lat,
        "coord_long": req.body.coord_long,
        "zoom": req.body.zoom
    }).then(dbDestinations =>
        res.json(dbDestinations))
);

// ROUTE TO GET THE DESTINATION'S COORDINATES & ZOOM LEVEL TO PASS TO GOOGLE MAPS
// GOOGLE MAP WILL BE CENTERED AND ZOOMED TO THAT LEVEL
router.get("/coords/:destination", (req, res) =>
    db.Destination.findAll({
        where: {
            destination: req.params.destination
        }
    }).then(dbDestinationCoords =>
        res.json(dbUserDestinationCoords))
);

// ROUTE TO GET LIST OF USERS BASED ON SEARCH BY NAME
router.get('/userSearch/:name', (req, res) => 
    db.User.findAll({
        where: {
            first_name: req.params.name
        }
    }).then(dbSearchedUsers => 
        res.json(dbSearchedUsers))
);

// ROUTE TO GET LIST OF USERS WITH A PAGE FOR A SEARCHED DESTINATION
router.get('/destinationSearch/:destination', (req, res) => {
    let query = `SELECT Users.id, Users.first_name, Users.last_name FROM Users INNER JOIN UserDestinations ON Users.id = UserDestinations.user_id WHERE UserDestinations.destination='${req.params.destination}'`

    sequelize.query(query, {
        type: sequelize.QueryTypes.SELECT
    }).then(data => {
        res.json(data);
    });
});

// Using the passport.authenticate middleware with our local strategy.
// If the user has valid login credentials, send them to the members page.
// Otherwise the user will be sent an error
router.post("/login", passport.authenticate("local"), function (req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/profile");
    console.log('LOGGED IN!');
});

// Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
// how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
// otherwise send back an error
router.post("/signup", function (req, res) {
    console.log(req.body);
    db.User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password
    }).then(function () {
        res.redirect(307, "/create/destination");
    }).catch(function (err) {
        console.log(err);
        res.json(err);
        // res.status(422).json(err.errors[0].message);
    });
});

// Route for logging user out
router.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});

// Route for getting some data about our user to be used client side
router.get("/user_data", function (req, res) {
    if (!req.user) {
        // The user is not logged in, send back an empty object
        res.json({});
    } else {
        // Otherwise send back the user's email and id
        // Sending back a password, even a hashed password, isn't a good idea
        res.json({
            first_name: req.user.first_name,
            email: req.user.email,
            id: req.user.id
        });
    }
});


module.exports = router;

