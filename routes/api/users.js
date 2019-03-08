const express = require("express");
const router = express.Router();
const pg = require("pg");
const path = require("path");
let pool = new pg.Pool({
  port: "",
  password: "",
  database: "",
  max: 10,
  host: "localhost",
  user: ""
});
// get request to api/users
router.get("/", (req, res) => {
  console.log("nothing yet");
});

module.exports = router;
