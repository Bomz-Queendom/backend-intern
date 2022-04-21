const mongoose = require("mongoose");

const agentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    agentPin: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    jobTitle: String,
    phoneNum: String
}, { timestamps: true })


const agentModels = mongoose.model("agents", agentSchema);
module.exports = agentModels;