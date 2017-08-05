// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Reservation (DATA)
// =============================================================
var reservations = [{
  routeName: "1",
  CustomerName: "Mike Jones",
  phoneNumber: "404-251-5378",
  customerEmail: "whowhomikeJones@email.com",
  customerID: 1
}, {
  routeName: "2",
  CustomerName: "Julio Jones",
  phoneNumber: "404-243-7893",
  customerEmail: "JJones@email.com",
  customerID: 2
},
}];
// =============================================================

// listening on PORT 3000
// =============================================================
app.listen((process.env.PORT || 3000), function() {
  console.log("App listening on PORT " + PORT);
});