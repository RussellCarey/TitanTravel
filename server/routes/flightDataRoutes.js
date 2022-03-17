const express = require("express");
const router = express.Router();
const DateInputTest = require("../utils/dateInputTest");

const FlightController = require("../controllers/flightController");

router.post("/getallhubs", FlightController.searchPartialHub);
router.post("/generateFlights", DateInputTest.generateRandomData);

module.exports = router;
