const express = require('express');
var crypto = require('crypto');
const router = express.Router();
const User = require("../models/user");
const Reviews = require("../models/reviews");
router.route("/populate_user").post(function (req, res) {
    var data = require('../dummy_data/users.json');
    for (let i = 0; i < data.length; i++) {
      const hash = crypto.createHash('sha256').update(data[i].password).digest('base64');
      data[i].password = hash
    }
    User.insertMany(data, function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  });
  router.route("/populate_reviews").post(function (req, res) {
    var data = require('../dummy_data/reviews.json');
    Reviews.insertMany(data, function (err, result) {
      if (err) {
        res.send(err);
      } else {
        
        res.send(result);
      }
    });
  });

router.route("/register").post(async function (req, res) {
    const hash = crypto.createHash('sha256').update(req.body.password).digest('base64');
    req.body.password = hash;
    User.findOne({ email: req.body.email }, function (err, result) {
      if (err) {
        res.send(err);
      } else {
        if (result) {
          res.status(400).send({ "message": "User already registered" });
        } else {
          User.create(req.body, function (err, result) {
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
    const hash = crypto.createHash('sha256').update(req.body.password).digest('base64');
    req.body.password = hash;
    User.findOne({ email: req.body.email }, function (err, result) {
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
