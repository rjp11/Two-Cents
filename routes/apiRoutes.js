const axios = require("axios");
const router = require("express").Router();

var db = require("../models/");

// router.get("/destinations", (req, res) => 
//     db.Destination.findAll({})
//         .then(dbDestinations =>
//             res.json(dbDestinations))
// );

router.post("/userDestinations", (req, res) =>
    db.UserDestinations.create({
        "user_id": req.body.user_id,
        "destination_id": req.body.destination_id
    }).then(dbUserDestinations =>
        res.json(dbUserDestinations))
);

router.post("/add/destination", (req, res) => 
    db.Destination.create({
        "name": req.body.name
    }).then(dbDestinations =>
        res.json(dbDestinations))
);

//router.post("/poi")




module.exports = router;