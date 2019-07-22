import pino from "pino";

import { isProductionMode } from "./environment";

export default pino({
  prettyPrint: !isProductionMode(),
});
