const Patient = require("../../Model/patient");

module.exports.register_patient = function (req, res) {
  Patient.findOne({ mobileNumber: req.body.mobileNumber }, function (
    err,
    patient
  ) {
    if (!patient) {
      Patient.create(
        {
          name: req.body.name,
          mobileNumber: req.body.mobileNumber,
          status: req.body.status,
        },
        function (err, patient) {
          console.log(req.body);
          if (err) {
            return res.json(500, {
              message: "Internal Server error",
            });
          } else {
            return res.json(200, {
              message: "Successfully created new patient",
              patient: patient,
            });
          }
        }
      );
    } else {
      return res.json(200, {
        message: "Patient is already present in the database ",
        patient: patient,
      });
    }
  });
};

module.exports.getAllPatients = async function (req, res) {
  try {
    let patients = await Patient.find({}).populate("report");
    console.log(patients.length);
    if (patients.length > 0) {
      return res.json(200, {
        data: {
          message: "Successfully fetched the patients",
          patients: patients,
        },
      });
    } else if (patients === null || patients === undefined) {
      return res.json(400, {
        message: "database error",
      });
    }
  } catch (err) {
    return res.json(500, {
      message: "Internal server error",
    });
  }
};
