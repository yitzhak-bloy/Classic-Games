class HttpError extends Error {
  constructor(massage, errorCode) {
    super(massage);
    this.code = errorCode;
  }
}

module.exports = HttpError;