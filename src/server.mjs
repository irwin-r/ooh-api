import express from "express";

import exceptions from "./middlewares/exceptions";
import routes from "./routes";

export default class Server {
  constructor() {
    this.app = express();

    this.app.use(exceptions);
    this.app.use(routes);

    this.app.use(exceptions);
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
