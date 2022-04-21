const mongoose = require("mongoose");

const petitionsSchema = new mongoose.Schema({
    petitionType: String,
    problemDetail: String,
    images: Array,
    needCorrective: String,
    status: String,
    endDate: Date
}, { timestamps: true });

module.exports = petitionsSchema;