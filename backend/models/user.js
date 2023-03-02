const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let users = new Schema({
    first_name: {type: String},
    last_name: {type: String},
    email: {type: String},
    phone_number: {type: String},
    password: {type: String},
    favorites : [Number],
    properties: [Number]
});
const User = mongoose.model("users", users)

module.exports = User;