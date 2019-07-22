import "dotenv/config";

import { sequelize } from "./models";
import logger from "./utils/logger";

import Server from "./server";

const { LISTEN_PORT = 3000 } = process.env;

// Top-level awaits cannot come soon enough ;_;
(async () => {
  const server = new Server();

  try {
    await sequelize.sync();

    const listener = await server.listen(LISTEN_PORT);
    logger.info(`Now listening on port ${listener.address().port}`);
  } catch (err) {
    logger.fatal("Unable to listen?", err);
    process.exit(-1);
  }
})();
