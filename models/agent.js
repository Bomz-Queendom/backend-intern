const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const jwtSecret = require('../config/secret').jwtSecret;

const agentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    agentPin: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    jobTitle: String,
    phoneNum: String
})

agentSchema.methods.generateAuthToken = () => {
    const token = jwt.sign({ _id: this._id }, jwtSecret);
    return token;
}

const agentModels = mongoose.model("agents", agentSchema);
module.exports = agentModels;