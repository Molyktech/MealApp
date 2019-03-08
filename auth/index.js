const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "locked"
  });
});

//validate user
//check if its a string and not blank
let validUser = user => {
  const validEmail = typeof user.email == "string" && user.email.trim() != "";
  const validPassword =
    typeof user.password == "string" &&
    user.password.trim() != "" &&
    user.password.trim().length >= 6;

  return validEmail && validPassword;
};

//create a signup route i.e /auth/signup
router.post("/signup", (req, res, next) => {
  if (validUser(req.body)) {
    res.json({
      message: "its working"
    });
  } else {
    //send and console.error();
    next(new Error("Invalid user"));
  }
});

module.exports = router;
