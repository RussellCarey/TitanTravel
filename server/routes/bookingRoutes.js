const express = require("express");
const router = express.Router();

const BookingController = require("../controllers/bookingController");

router.post("/search", BookingController.searchBookings);

module.exports = router;
