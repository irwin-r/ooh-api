import chai from "chai";
import chaiHttp from "chai-http";

import { MOCK_SESSION_COOKIE } from "../../../../models/mocks";
import Server from "../../../../server";

chai.use(chaiHttp);
chai.should();

const { assert, request } = chai;
const server = new Server();
const app = server.getApplication();

describe("Asset Routes", () => {
  it("should get all assets", () =>
    request(app)
      .get("/api/v1/assets")
      .set("Cookie", MOCK_SESSION_COOKIE)
      .then(res => {
        assert.equal(res.statusCode, 200);
        assert.isArray(res.body);
        assert.lengthOf(res.body, 1);
      }));

  it("should reject a request with an invalid UUIDV4", () =>
    request(app)
      .get("/api/v1/assets/not-a-uuidv4")
      .set("Cookie", MOCK_SESSION_COOKIE)
      .then(res => {
        assert.equal(res.statusCode, 500);
      }));
});
