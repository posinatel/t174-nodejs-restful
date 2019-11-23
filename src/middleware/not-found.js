const notFound = (request, response, next) => {
  response
    .status(404)
    .json({
      error: `Route ${request.method} ${request.url} not found`
    });

  next && next();
};

module.exports = notFound;