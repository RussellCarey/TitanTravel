const AppError = require("./../utils/appError");
const catchAsync = require("../utils/catchAsync");

const BookingServices = require("../services/bookingServices");

exports.searchBookings = catchAsync(async (req, res, next) => {
  const flightSearch = await BookingServices.searchForFlight(req);

  // Return 2 sets here so its saved to the state on the front end straight away..
  res.json({
    status: "success",
    data: {
      outbound: flightSearch.outboundFlights.rows,
      return: flightSearch.returnFlights.rows,
      outboundOriginal: flightSearch.outboundFlights.rows,
      returnOriginal: flightSearch.returnFlights.rows,
    },
  });
});
