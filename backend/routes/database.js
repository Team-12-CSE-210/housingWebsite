const express = require('express');
const all_model = require("../models/model");
const listing = all_model.listings
const users = all_model.users
const images = all_model.images
const router = express.Router();
const mongoose = require("mongoose");
const env = require("../env")

mongoose.connect(env.db_url, { useUnifiedTopology: true, useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
  var data = require('../dummy_data/listing.json');
  listing.insertMany(data);
  var data = require('../dummy_data/users.json');
  users.insertMany(data);

});

router.route("/populate_listing").post(function (req, res) {
  var data = require('../dummy_data/listing.json');
  listing.insertMany(data, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

router.route("/populate_user").post(function (req, res) {
  var data = require('../dummy_data/users.json');
  users.insertMany(data, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

router.route("/addListing").post(function (req, res) {
  var data = req.body
  listing.insertOne(data, function (err, result) {
    if (err) {
      res.send(err);
    }
  });
});

router.route("/fetchdata").get(function (req, res) {
  listing.find({}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});


router.route("/register").post(async function (req, res) {
  users.findOne({ email: req.body.email }, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      if (result) {
        res.status(400).send({ "message": "User already registered" });
      } else {
        users.create(req.body, function (err, result) {
          if (err) {
            res.send(err);
          } else {
            res.send({ "message": "User successfully registered" });
          }
        });
      }
    }
  });

});

router.route("/login").post(async function (req, res) {
  users.findOne({ email: req.body.email }, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      if (result) {
        const password = req.body.password === result.password;
        if (password) {
          res.send(result);
        } else {
          res.status(400).send({ "message": "Incorrect password" });
        }
      } else {
        res.status(400).send({ "message": "User is not registered" });
      }
    }
  });
});


module.exports = router;

