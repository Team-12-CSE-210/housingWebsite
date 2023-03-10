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
router.post('/filtered-property-details', async (req, res) => {
    try {
        const data = req.body;
        let allProperties = [];

        const queryList = []
        if (data.amenities) {
            for (let amenity of data.amenities) {
                const amenityName = amenity.length == 2 ? "AC" : amenity.toLowerCase();
                queryList.push({[amenityName] : true})
            }
        }
        
        if (data.house_type) {
            queryList.push({'property_type': { $in: data.house_type }})
        }
        if (data.bed) {
            queryList.push({'number_bedroom': { $gte: data.bed }})
        }
        if (data.bath) {
            queryList.push({'number_bathroom': { $gte: data.bath }})
        }
        if (data.price) {
            const minPrice = data.price[0]
            const maxPrice = data.price[1]
            queryList.push({'price': { $gte: minPrice, $lte: maxPrice }})
        }
        if (data.property) {
            const regex = new RegExp(data.property, "i");
            
            queryList.push({ $or: [
                { 'name': regex },
                { 'address': regex }
            ]})

        }
        
        const query = {
            $and: queryList
        }

        const properties = await Listing.find(query, null)
        allProperties.push(...properties)

        
        let propertyIds = allProperties.map(item => item.id);
        const query2 = {
            $and: [
                { $or: queryList },
                { 'id': { $nin: propertyIds } }
            ]
        }
        const properties2 = await Listing.find(query2, null);
        allProperties.push(...properties2)
        
        
      
        propertyIds = allProperties.map(item => item.id);
        const query3 = { 'id': { $nin: propertyIds } }

        const properties3 = await Listing.find(query3, null);
        allProperties.push(...properties3)
        

        res.status(200).send({ success: true, data: allProperties });
    } 
    catch (err) {
        console.log(err)
        res.status(500).send({ success: false, properties: [], message: 'Something went wrong!' });
    }
}); 
router.get('/user-data', async (req, res) => {
  try {
    const properties = await User.findOne({ email: req.headers['user-id'] });
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