import chai from "chai";
import sinon from "sinon";

import asyncMiddleware from "../async";

const { assert } = chai;

describe("Async Middleware", () => {
  it("should swallow the error accordingly", async () => {
    const handler = async () => {
      throw new Error();
    };

    const callback = sinon.fake();

    await asyncMiddleware(handler)(null, null, callback);

    assert(callback.called);
  });

  it("should move on without the callback being hit", async () => {
    const callback = sinon.fake();

    await asyncMiddleware(async () => {})(null, null, callback);

    assert(!callback.called);
  });
});
