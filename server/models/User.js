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
  department_id: { type: mongoose.Schema.Types.ObjectId, ref: "Department" },
  appointment_notes: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
