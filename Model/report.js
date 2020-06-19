const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  Status: {
    type: String,
    required: true,
  },
  Date: {
    type: String,
    required: true,
  },
});

const Report = mongoose.model("Report", reportSchema);
module.exports = Report;
