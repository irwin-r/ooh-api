import chai from "chai";
import chaiHttp from "chai-http";

import { MOCK_SESSION_COOKIE } from "../../models/mocks";
import Server from "../../server";

chai.use(chaiHttp);
chai.should();

const { assert, request } = chai;
const server = new Server();
const app = server.getApplication();

describe("Authentication Middleware", () => {
  it("should be able to access shopping centres route, when provided a valid session cookie", () =>
    request(app)
      .get("/api/v1/shopping_centres")
      .set("Cookie", MOCK_SESSION_COOKIE)
      .then(res => {
        assert.equal(res.statusCode, 200);
        assert.isArray(res.body);
      }));

  it("should not be able to access shopping centres, when no session cookie is provided", () =>
    request(app)
      .get("/api/v1/shopping_centres")
      .then(res => {
        assert.equal(res.statusCode, 401);
      }));
});
