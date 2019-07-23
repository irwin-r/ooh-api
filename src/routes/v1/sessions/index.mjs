import Boom from "@hapi/boom";
import Router from "express";
import moment from "moment";

import asyncMiddleware from "../../../middlewares/async";
import { Session } from "../../../models";
import { isProductionMode } from "../../../utils/environment";

import { SESSION_COOKIE_NAME } from "./constants";
import { POST_SESSION_SCHEMA } from "./schema";
import { generateSessionToken } from "./utils";

const router = Router({ mergeParams: true });

// As we're just demonstrating "login" functionality here, you only need to provide a userId to create a session
// This would, in theory, be replaced with a legitimate authentication challenge
router.post(
  "/",
  POST_SESSION_SCHEMA,
  asyncMiddleware(async (req, res) => {
    const { userId } = req.body;

    const token = generateSessionToken();
    const expiredAt = moment().add(1, "day");

    // Persist token in database
    const session = await Session.create({
      expiredAt,
      token,
      userId,
    });

    if (!session) {
      throw Boom.internal();
    }

    // Provide client with cookie
    res.cookie(SESSION_COOKIE_NAME, token, {
      httpOnly: false,
      maxAge: expiredAt.diff(moment(), "milliseconds"),
      secure: isProductionMode(),
    });

    res.status(201).json(session);
  })
);

export default router;
