import Boom from "@hapi/boom";

export default (err, req, res, next) => {
  // No error, no care :p
  if (!err) {
    return next();
  }

  // If it's not a Boom error, we want to suppress it anyway to prevent leaking of data
  if (!Boom.isBoom(err)) {
    return res.status(500).send();
  }

  const { headers, payload, statusCode } = err.output;

  for (const [header, value] of Object.entries(headers)) {
    res.setHeader(header, value);
  }

  return res.status(statusCode).json(payload);
};
