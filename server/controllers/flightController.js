const AppError = require("./../utils/appError");
const catchAsync = require("../utils/catchAsync");
const pool = require("../db");

exports.searchPartialHub = catchAsync(async (req, res, next) => {
  console.log(req.body.partial);
  const list = await pool.query("SELECT * FROM hubs WHERE UPPER(hub_name) LIKE UPPER($1)", [`${req.body.partial}%`]);

  if (list.rows) {
    res.json({
      status: "success",
      data: list.rows,
    });
  }
});
