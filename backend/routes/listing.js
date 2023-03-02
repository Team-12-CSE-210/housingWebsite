const express = require('express');
const router = express.Router();
const Listing = require("../models/listing");


router.get('/all-property-details', async (req, res) => {
  try {
    const properties = await Listing.find({}, null, { limit: 18 });
    res.status(200).send({ success: true, data: properties });
  }
  catch (err) {
    res.status(500).send({ success: false, properties: [], message: 'Something went wrong!' });
  }
});

router.get('/property-details', async (req, res) => {
  try {
    const { id } = req.query;
    const properties = await Listing.findOne({ id }, null, { limit: 18 });
    res.status(200).send({ success: true, data: properties });
  }
  catch (err) {
    res.status(500).send({ success: false, properties: [], message: 'Something went wrong!' });
  }
});

router.route("/addListing").post(function (req, res) {
  var data = req.body
  Listing.insertOne(data, function (err, result) {
    if (err) {
      res.send(err);
    }
  });
});

router.route("/populate_listing").post(function (req, res) {
  var data = require('../dummy_data/listing.json');
  Listing.insertMany(data, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});


module.exports = router;