const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
  consultant: String,
  details: String,
  department: String,
user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Department = mongoose.model("Department", departmentSchema);

module.exports = Department;
