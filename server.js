const express = require("express");
const bodyParser = require("body-parser");
let morgan = require("morgan");
let pg = require("pg");

let pool = new pg.Pool({
  port: "",
  password: "",
  database: "",
  max: 10,
  host: "localhost",
  user: ""
});

//look into users.js routes
let users = require("./routes/api/users");
let auth = require("./auth/index");

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//Use ROUTES anything that goes to the api url shld go to refer the the users variable
app.use("/auth", auth);
app.use("/api/users", users);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
