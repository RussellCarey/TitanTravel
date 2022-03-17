const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
// const xss = require("xss");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const globalErrorHandler = require("./controllers/errorController");

// Routes
const FlightRoutes = require("./routes/flightDataRoutes");
const BookingRoutes = require("./routes/bookingRoutes");

//
// const globalErrorHandler = require("./controllers/errorController");

const localArray = ["http://127.0.0.1:3000", "localhost:3000", "http://localhost:3000", "localhost:3000"];
const productionArray = ["https://www.russell-carey.com", "https://russell-carey.com"];

app.use(
  cors({
    credentials: true, // allow session cookie from browser to pass through
    origin: process.env.NODE_ENV === "production" ? productionArray : localArray,
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: false, limit: "20mb" }));
app.use(cookieParser());

// Data sanitization against Cross site scripting attack - Clean any user input for malicious HTML code..
// app.use(xss());

// Custom routes..
app.use("/api/flights", FlightRoutes);
app.use("/api/bookings", BookingRoutes);

app.use(globalErrorHandler);

const PORT = process.env.DB_PORT || 2222;
app.listen(PORT, () => {
  console.log(`Connected to server on port ${PORT}`);
});
