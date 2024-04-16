const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
  consultant: String,
  details: String,
  department: String,
});

const Department = mongoose.model("Department", departmentSchema);

module.exports = Department;
