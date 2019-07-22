import Router from "express";

import routes from "./v1";

export const CURRENT_API_VERSION = 1;

const router = Router({ mergeParams: true });

router.use(`/api/v${CURRENT_API_VERSION}/`, routes);

export default router;
