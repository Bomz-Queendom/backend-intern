const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    houseNumber: String,
    subDistrict: String,
    district: String,
    province: String,
    postalCode: String
});

module.exports = addressSchema;