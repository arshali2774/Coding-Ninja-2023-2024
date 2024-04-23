// Please don't change the pre-written code

export class customErrorHandler extends Error {
  constructor(statusCode, errMessage) {
    super(errMessage);
    this.statusCode = statusCode;
  }
}

export const errorHandlerMiddleware = (err, req, res, next) => {
  // Write your code here
  console.log(err);
  if (err instanceof customErrorHandler) {
    res.status(err.statusCode).send(err.message);
  }

  res.status(500).send('Oops! Something went wrong... Please try again later!');
};
