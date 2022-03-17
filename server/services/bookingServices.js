var dayjs = require("dayjs");
const pool = require("../db");

// Convert date into a useable format..
const addToDateAndConvert = (days, date) => {
  const dateObject = dayjs(date).add(days, "day");
  // Ensure the month has a 0 infront of it for formatting purposes
  const monthString = (dateObject.$M + 1).toString();
  const monthCheck = monthString.length < 2 ? `0${monthString}` : monthString;
  const dayString = dateObject.$D.toString();
  const dayCheck = dayString.length < 2 ? `0${dayString}` : dayString;

  const dateString = `${dateObject.$y}-${monthCheck}-${dayCheck}`;
  return dateString;
};

// Create a string based on how many days we wish to be flexible by in our flight search..
// builds a string to add OR x OR y
const createFlexibleDayString = (days, date) => {
  const formattedDate = dayjs(date).format("YYYY-MM-DD");

  let newString = "";
  for (let i = 0; i < days; i++) {
    if (i === 0) newString += `AND (date = '${addToDateAndConvert(i, formattedDate)}' `;
    if (i !== 0) newString += `OR date = '${addToDateAndConvert(i, formattedDate)}' `;
  }

  newString += ")";
  return newString;
};

exports.searchForFlight = async (req) => {
  const body = req.body.flightState;
  const flexibleDays = body.flexible;
  const departureDatesString = createFlexibleDayString(flexibleDays, body.departureDate);
  const returnDatesString = createFlexibleDayString(flexibleDays, body.returnDate);

  // Had an issue where I tried to input a big string using $3.. I needed to use ${}
  const outboundFlights = await pool.query(
    `SELECT flights.id AS flight_id,  company_name, from_hub.hub_name AS from_hub_name, to_hub.hub_name AS to_hub_name, start_time, end_time, date, price 
    FROM flights 
    JOIN companies ON companies.id = companies_id 
    JOIN hubs from_hub ON from_hub.id = from_hub_id 
    JOIN hubs to_hub ON to_hub.id = to_hub_id 
    WHERE to_hub.hub_name = $1 
    AND from_hub.hub_name = $2 ${departureDatesString}`,
    [body.destinationHub, body.departureHub]
  );

  const returnFlights = await pool.query(
    `SELECT flights.id AS flight_id,  company_name, from_hub.hub_name AS from_hub_name, to_hub.hub_name AS to_hub_name, start_time, end_time, date, price 
    FROM flights 
    JOIN companies ON companies.id = companies_id 
    JOIN hubs from_hub ON from_hub.id = from_hub_id 
    JOIN hubs to_hub ON to_hub.id = to_hub_id 
    WHERE to_hub.hub_name = $1 
    AND from_hub.hub_name = $2 ${returnDatesString}`,
    [body.departureHub, body.destinationHub]
  );

  return {
    outboundFlights,
    returnFlights,
  };
};
