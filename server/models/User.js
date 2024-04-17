const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  forename: String,
  surname: String,
  department: String,
  email: String,
  password: String,
  dob: Date,
  patientNumber: String,
  patientPhone: Number,
  patientAddress: String,
  gender: String,
  profileImg: String,
  nextOfKin: String,
  nextOfKinName: String,
  nextOfKinNumber: Number,
  nextOfKinAddress: String,
  doctor: String,
  appointmentDate: String,
  appointmentNotes: String,
  department_id: { type: mongoose.Schema.Types.ObjectId, ref: "Department" },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
