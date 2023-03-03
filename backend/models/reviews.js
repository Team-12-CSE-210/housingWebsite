const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let reviews = new Schema({
    prop_id: { type: Number },
    review: { type: String },
    rating: { type: Number }
});
const Reviews = mongoose.model("reviews", reviews)

module.exports = Reviews;