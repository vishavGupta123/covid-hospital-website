const Report = require("../../Model/report");
const Patient = require("../../Model/patient");
const Doctor = require("../../Model/doctor");

module.exports.createReport = async function (req, res) {
  try {
    let id = req.params.id;
    console.log(req.body.date, req.params.id);
    console.log(req.body.status);
    let patient = await Patient.findById(req.params.id);
    console.log(patient);
    if (patient !== null && patient !== undefined) {
      let report = await Report.create({
        Status: req.body.status,
        Date: req.body.date,
      });
      console.log(report);
      patient.report = report._id;
      patient.save();
      return res.json(200, {
        message: "Successfully created a Report",
        report: report,
      });
    }
  } catch (err) {
    console.log(err);
    return res.json(500, {
      message: "Internal server error",
      error: err,
    });
  }
};

module.exports.fetchPatient = function (req, res) {
  console.log(req.params.id);
  Patient.findById(req.params.id)
    .populate("report")
    .exec(function (err, patient) {
      if (err) {
        return res.status(500).json({
          message: "Internal server error",
        });
      } else if (patient != null && patient != undefined) {
        return res.status(200).json({
          data: {
            message: "Successfully fetched the patient",
            patient,
          },
        });
      }
    });
};
