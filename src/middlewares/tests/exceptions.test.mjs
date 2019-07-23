import Boom from "@hapi/boom";
import chai from "chai";
import sinon from "sinon";

import exceptionMiddleware from "../exceptions";

const { assert } = chai;

describe("Boom/Exception Middleware", () => {
  it("should ignore events that aren't exceptions", () => {
    const callback = sinon.fake();

    exceptionMiddleware(null, null, null, callback);

    assert(callback.called);
  });

  it("should mark non-boom exceptions as 500 and dispatch", () => {
    const res = {
      end: sinon.fake(),
    };

    res.status = sinon.fake.returns(res);

    exceptionMiddleware(new Error(), null, res, null);

    assert(res.status.calledWith(500));
    assert(res.end.called);
  });

  it("should handle boomed errors accordingly", () => {
    const res = {
      json: sinon.fake(),
    };

    res.status = sinon.fake.returns(res);

    exceptionMiddleware(Boom.notFound(), null, res, null);

    assert(res.status.called);
    assert(res.json.called);
  });
});
