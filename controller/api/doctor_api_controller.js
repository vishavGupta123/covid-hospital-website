const Doctor = require("../../Model/doctor");
const jwt = require("jsonwebtoken");
const passport = require("../../config/passport_jwt_strategy");
module.exports.register = async function (req, res) {
  try {
    let doctor = await Doctor.findOne({ username: req.body.username });

    if (!doctor || doctor.password != req.body.password) {
      doctor = await Doctor.create({
        username: req.body.username,
        password: req.body.password,
      });

      return res.json(200, {
        message: "New Doctor has been registered",
        doctor: doctor,
      });
    } else {
      return res.json(200, {
        message: "Doctor is already there in the database",
      });
    }
  } catch (err) {
    return res.json(500, {
      message: "Internal server error",
    });
  }
};

module.exports.login = function (req, res) {
  Doctor.findOne({ username: req.body.username }, function (err, doctor) {
    if (!doctor || doctor.password != req.body.password) {
      return res.json(422, {
        message: "Invalid username/Password",
      });
    } else {
      return res.json(200, {
        data: {
          message: "Sign in successfull",
          data: {
            token: jwt.sign(doctor.toJSON(), "doctor", {
              expiresIn: "1000000",
            }),
          },
          doctor: doctor,
        },
      });
    }
  });
};
