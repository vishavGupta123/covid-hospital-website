const express = require("express");
const router = express.Router();

const homeApi = require("../../controller/api/home_controller");

router.use("/doctors", require("./doctors"));
router.use("/patients", require("./patients"));
router.post("/register_patient", homeApi.register_patient);
router.get("/", homeApi.getAllPatients);

module.exports = router;
