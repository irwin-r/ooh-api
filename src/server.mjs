import bodyParser from "body-parser";
import express from "express";
import pino from "express-pino-logger";

import exceptions from "./middlewares/exceptions";
import routes from "./routes";

export default class Server {
  static get middlewares() {
    return [bodyParser.json(), pino(), routes, exceptions];
  }

  constructor() {
    this.app = express();

    for (const middleware of Server.middlewares) {
      this.app.use(middleware);
    }
  }

  async listen(port) {
    return new Promise((resolve, reject) => {
      try {
        const listener = this.app.listen(port, () => resolve(listener));
      } catch (err) {
        reject(err);
      }
    });
  }
}
