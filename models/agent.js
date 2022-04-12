const mongoose = require("mongoose");

const agentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    agentPin: String,
    email: String,
    jobTitle: String,
    phoneNum: String
})

const agentModels = mongoose.model("agents", agentSchema);
module.exports = agentModels;