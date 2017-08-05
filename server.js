// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// =============================================================



// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;
// =============================================================



// Sets up the Express app to handle data parsing
// =============================================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// =============================================================



// Reservation (DATA)
// =============================================================
var reservations = [{
  routeName: "1",
  customerName: "Mike Jones",
  phoneNumber: "404-251-5378",
  customerEmail: "whowhomikeJones@email.com",
  customerID: 1
}, {
  routeName: "2",
  customerName: "Julio Jones",
  phoneNumber: "404-243-7893",
  customerEmail: "JJones@email.com",
  customerID: 2
}];

// Routes
// =============================================================
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "homepage.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

///////////api routes
//shows waitlist object
app.get("/api/waitlist", function(req, res) {
  res.json(waitlist);
});

//shows reservations object
app.get("/api/tables", function(req, res) {
  res.json(reservations);
});




// Create new reservation - takes in JSON formatted input
// =============================================================
app.post("/newreservation", function(req, res) {
  var newReservation = req.body;
  newReservation.routeName = newReservation.customerID;

  console.log(newReservation);

  reservations.push(newReservation);

  res.json(newReservation);
});
// =============================================================



// listening on PORT 3000
// =============================================================
app.listen((process.env.PORT || 3000), function() {
  console.log("App listening on PORT " + PORT);
});
//=============================================================
