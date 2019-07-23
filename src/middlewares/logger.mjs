import pino from "express-pino-logger";

import { isTestMode } from "../utils/environment";

// Disable logging while doing tests
export default !isTestMode() ? pino() : (req, res, next) => next();
