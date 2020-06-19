const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  report: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Report",
  },
});

const Patient = mongoose.model("Patient", patientSchema);
module.exports = Patient;
