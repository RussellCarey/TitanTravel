//! Notes for next time I look...
//? Look at main errors and see about adding operation error -- if it ISNT then we should throw a generatic error
//? This will make sure we dont feed bad stuff to the modal or client..
//* Oh wait we do, its in error.response.data.error.isOperational <<<<<<!!<!<!<!!<<!<

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

// Improve this further..
const sendProductionError = (err, res) => {
  res.status(err.statusCode).json({
    code: err.statusCode,
    status: err.status,
    message: "Something went wrong on our end! Please try again",
  });
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  console.log(err);

  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, res);
  }

  if (process.env.NODE_ENV === "production") {
    sendProductionError(err, res);
  }
};
