class AppError extends Error {
  constructor(message, statusCode) {
    super(message);

    this.statusCode = statusCode;
    this.status = "fail";
    // this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";

    // When we create an error manually it will contain this as true.
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
