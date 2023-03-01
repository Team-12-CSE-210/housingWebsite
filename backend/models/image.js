const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    filename: {
        required: true,
        type: String,
    },
    fileId: {
        required: true,
        type: String,
    },
    propertyID: {
        required: true,
        type: String,
    },
    isPrimary: {
        required: true,
        type: Boolean,
    }
});

const Image = mongoose.model('Image', ImageSchema);

module.exports = Image;
