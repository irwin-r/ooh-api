import express from "express";

import routes from "./routes";

export default class Server {
  constructor() {
    this.app = express();

    this.app.use(routes);
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
