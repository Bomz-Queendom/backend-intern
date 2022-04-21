const mongoose = require("mongoose");
const petitionsSchema = require("./petitions");
const addressSchema = require("./villagerAddress");

const villgerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
  gender: String,
  religion: String,
  ethnicity: String,
  nationalty: String,
  phoneNum: String,
  dateOfBirth: Date,
  idCart: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: addressSchema,
  petitions: [petitionsSchema]
}, { timestamps: true });


const villagerModels = mongoose.model('villagers', villgerSchema);

module.exports = villagerModels;

