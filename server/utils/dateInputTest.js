const catchAsync = require("../utils/catchAsync");
const pool = require("../db");

//! PURE SPAGETTTITITITITITIITITIITIIIHIHIHI
// Inputs a random flight into the database..
const generateData = (isTo) => {
  const airline = Math.ceil(Math.random() * 5);
  const startingPoint = isTo ? Math.ceil(Math.random() * 4) : Math.ceil(Math.random() * 5) + 4;
  const destination = isTo ? Math.ceil(Math.random() * 5) + 4 : Math.ceil(Math.random() * 4);

  let day = Math.ceil(Math.random() * 28).toString();
  let month = Math.ceil(Math.random() * 12).toString();
  const years = [2021, 2022, 2023, 2024];
  let year = Math.floor(Math.random() * 4);
  const price = Math.ceil(Math.random() * 1000) * 100;

  day = day.toString().length < 2 ? `0${day}` : day;
  month = month.toString().length < 2 ? `0${month}` : month;
  const finalYear = years[year].toString();
  const date = `${finalYear}-${month}-${day}`;

  let hours = Math.ceil(Math.random() * 12);
  let hoursFrom = hours + Math.ceil(Math.random() * 10);
  let mins = Math.ceil(Math.random() * 59);

  hours = hours.toString().length < 2 ? `0${hours}` : hours;
  hoursFrom = hoursFrom.toString().length < 2 ? `0${hoursFrom}` : hoursFrom;
  mins = mins.toString().length < 2 ? `0${mins}` : mins;

  const timeTo = `${hours}:${mins}`;
  const timeFrom = `${hoursFrom}:${mins}`;

  return {
    airline,
    startingPoint,
    destination,
    date,
    timeFrom,
    timeTo,
    price,
  };
};

// Generate X amount of random flights to and from earth to a space port..
exports.generateRandomData = catchAsync(async (req, res, next) => {
  for (let i = 0; i < 100000; i++) {
    const to = generateData(true);
    const from = generateData(false);

    const toList = await pool.query(
      `INSERT INTO flights (companies_id, from_hub_id, to_hub_id, date, start_time, end_time, price) VALUES (${to.airline},${to.startingPoint},${to.destination}, $1, $2, $3, ${to.price})`,
      [to.date, to.timeTo, to.timeFrom]
    );

    const fromList = await pool.query(
      `INSERT INTO flights (companies_id,from_hub_id,to_hub_id,date, start_time, end_time,price) VALUES (${from.airline},${from.startingPoint},${from.destination}, $1, $2, $3, ${from.price})`,
      [from.date, from.timeTo, from.timeFrom]
    );
  }

  res.json({
    status: "success",
    data: "GENERATED SOME DATA",
  });
});
