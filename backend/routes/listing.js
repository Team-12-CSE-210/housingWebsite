const express = require('express');
const router = express.Router();
const Listing = require("../models/listing");
const User = require("../models/user");
const Reviews = require("../models/reviews");
var maxId;

router.get('/all-property-details', async (req, res) => {
  try {
    const properties = await Listing.find({}, null);
    res.status(200).send({ success: true, data: properties });
  }
  catch (err) {
    res.status(500).send({ success: false, properties: [], message: 'Something went wrong!' });
  }
});
router.get('/user-data', async (req, res) => {
  try {
    const properties = await User.findOne({ _id: req.headers['user-id'] });
    res.status(200).send({ success: true, data: properties });
  }
  catch (err) {
    res.status(500).send({ success: false, properties: [], message: 'Something went wrong!' });
  }
});
router.post('/add-to-properties', async (req, res) => {
  try {
    const data = await User.findOne({ _id: req.body.userId });
    const propid = parseInt(req.body.propId);
    if(data.properties.includes(propid)===false){
      const userData = await User.findOneAndUpdate({ _id: req.body.userId }, { properties:[...data.properties, propid] })
    }
    res.status(200).send({ success: true, data: req.body });
  }
  catch (err) {
    res.status(500).send({ success: false, properties: [], message: 'Something went wrong!' });
  }
});
router.post('/add-to-favourites', async (req, res) => {
  try {
    const data = await User.findOne({ _id: req.body.userId });
    const propid = parseInt(req.body.propId);
    if(data.favorites.includes(propid)===false){
      const userData = await User.findOneAndUpdate({ _id: req.body.userId }, { favorites:[...data.favorites, propid] })
    }
    res.status(200).send({ success: true, data: req.body });
  }
  catch (err) {
    res.status(500).send({ success: false, properties: [], message: 'Something went wrong!' });
  }
});
router.post('/add-to-reviews', async (req, res) => {
  try {
    const data = await Reviews.create(req.body);
    res.status(200).send({ success: true, data: req.body });
  }
  catch (err) {
    console.log(err);
    res.status(500).send({ success: false, properties: [], message: 'Something went wrong!' });
  }
});
router.get('/get-reviews', async (req, res) => {
  try {
    const prop_id=req.headers['prop-id'];
    const data = await Reviews.find({ prop_id: prop_id });
    res.status(200).send({ success: true, data: data });
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

router.get('/get-next-id', async (req, res) => {
    try {
      if (!maxId) {
        const property = await Listing.find().sort({id: -1}).limit(1);
        maxId = property[0]['id']
      }
      res.status(200).send({ success: true, id: ++maxId });   
    }
    catch (err) {
      res.status(500).send({ success: false, properties: [], message: 'Something went wrong!' });
      console.log(err)
    }
  });


router.route("/addListing").post(async function (req, res) {
  var data = req.body
  Listing.create(data, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result)
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