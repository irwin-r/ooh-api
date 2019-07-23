import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";

import exceptions from "./middlewares/exceptions";
import logger from "./middlewares/logger";
import routes from "./routes";

export default class Server {
  static get middlewares() {
    return [bodyParser.json(), cookieParser(), logger, routes, exceptions];
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

  getApplication() {
    return this.app;
  }
}
