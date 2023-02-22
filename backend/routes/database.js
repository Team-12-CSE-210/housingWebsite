const express = require('express');
const router = express.Router();
const listing = require("../models/model");

router.route("/insertinitial").post(function(req, res) {
    var data = require('./listing.json');
    listing.insertMany(data, function(err, result) {
        if (err) {
        res.send(err);
        } else {
        res.send(result);
        }
    });
});


router.route("/fetchdata").get(function(req, res) {
    listing.find({}, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
});


module.exports = router;

