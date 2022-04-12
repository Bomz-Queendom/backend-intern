const mongoose = require("mongoose");
const imageSchema = require("./image");

const petitionsSchema = new mongoose.Schema({
    agent_id: mongoose.ObjectId,
    petitionType: String,
    problemDetail: String,
    images: Array,
    needCorrective: String,
    status: String,
    createDate: Date,
    receivedDate: Date,
    endDate: Date
});

module.exports = petitionsSchema;