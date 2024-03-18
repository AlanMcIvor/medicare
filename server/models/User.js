const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  forname: String,
  surname: String,
  department: String,
  nextOfKin: String,
  nextOfKinName: String,
  dob: Date,
  patient_number: Number,
});
