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

listing_model = mongoose.model("listings", listing);

let users = new Schema({
    first_name: {type: String},
    last_name: {type: String},
    email: {type: String},
    phone_number: {type: String},
    password: {type: String},
    favorites : [Number],
    properties: [Number]
});
users_model = mongoose.model("users", users)
// module.exports = mongoose.model("listings", listing);


let ImageSchema = new Schema({
    filename: {
        required: true,
        type: String,
    },
    propertID: {
        required: true,
        type: String,
    }
});

images_model = mongoose.model("images", users)


module.exports = {
   listings:listing_model,
   users:users_model,
   images:images_model
};