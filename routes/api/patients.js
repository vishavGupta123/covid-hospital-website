const express = require("express");
const router = express.Router();
const passport = require("passport");

const patientApi = require("../../controller/api/patient_api_controller");

router.post("/:id/create_report", patientApi.createReport);
router.get("/:id", patientApi.fetchPatient);

module.exports = router;
