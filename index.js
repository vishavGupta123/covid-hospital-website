const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const port = 8000;
const router = express.Router();
const db = require("./config/mongoose");
const passport = require("passport");
const passportJWT = require("./config/passport_jwt_strategy");

app.use(cors());
app.use(express.urlencoded());
app.use("/api", require("./routes/api"));

app.listen(port, function (err) {
  if (err) {
    console.log("Error in running the server");
  }
});
