const mongoose = require('mongoose');

var imageSchema = new mongoose.Schema({
    imageName: String,
});

module.exports = imageSchema;