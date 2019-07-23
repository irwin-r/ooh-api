import Boom from "@hapi/boom";

import { Session } from "../models";
import { SESSION_COOKIE_NAME } from "../routes/v1/sessions/constants";

import asyncMiddleware from "./async";

// JWTs are inherently insecure unless there's validation against a cache or a DB
// And once you're referring back to a cache or DB, you may as well just store the data in the DB!
export default asyncMiddleware(async (req, res, next) => {
  const { cookies = {} } = req;
  const sessionId = cookies[SESSION_COOKIE_NAME];

  // If there are no cookies or no session cookie, ditch this\
  if (!sessionId) {
    throw Boom.unauthorized();
  }

  // Find session in DB
  const session = await Session.findByPk(sessionId);
  if (!session) {
    throw Boom.unauthorized();
  }

  const now = new Date();

  if (session.createdAt > now || session.expiredAt <= now) {
    throw Boom.unauthorized();
  }

  // Store user & session data in requests
  req.session = session;

  return next();
});
