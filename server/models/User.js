const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  forename: String,
  surname: String,
  department: String,
  email: String,
  password: String,
  dob: Date,
  patientNumber: Number,
  nextOfKin: String,
  nextOfKinName: String,

  department_id: { type: mongoose.Schema.Types.ObjectId, ref: "Department" },
  appointment_notes: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
