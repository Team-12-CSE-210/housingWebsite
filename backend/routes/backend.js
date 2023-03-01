const express = require('express');
const router = express.Router();
const {listings} = require("../models/model");


router.get('/all-property-details', async (req, res) => {
  try {
    const properties = await listings.find({}, null, { limit: 18 });
    res.status(200).send({ success: true, data: properties });
  }
  catch (err) {
    res.status(500).send({ success: false, properties: [], message: 'Something went wrong!' });
  }
});

router.get('/property-details', async (req, res) => {
  try {
    const { id } = req.query;
    const properties = await listings.findOne({id}, null, { limit: 18 });
    res.status(200).send({ success: true, data: properties });
  }
  catch (err) {
    res.status(500).send({ success: false, properties: [], message: 'Something went wrong!' });
  }
});

module.exports = router;