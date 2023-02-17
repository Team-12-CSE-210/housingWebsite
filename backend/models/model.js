const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let listing = new Schema({
    id: {type: Number},
    name: {type: String},
    address: {type: String},
    price: {type: Number},
    number_bedroom: {type: Number},
    number_bathroom: {type: Number},
    sqrft: {type: Number},
    available_date: {type: String},
    description: {type: String},
    latitude: {type: Number},
    longitude: {type: Number},
    kitchen: {type: Boolean},
    gym: {type: Boolean},
    pool: {type: Boolean},
    laundry: {type: Boolean},
    furnished: {type: Boolean},
    pets: {type: Boolean},
    AC: {type: Boolean},
    parking: {type: Boolean},
  });

module.exports = mongoose.model("listings", listing);
