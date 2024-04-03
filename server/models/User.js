const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  forename: String,
  surname: String,
  department: String,
  email: String,
  password: String,
  dob: Date,
  patientNumber: String,
  nextOfKin: String,
  nextOfKinName: String,
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
