import Router from "express";

import authenticationMiddleware from "../../middlewares/authentication";

import assets from "./assets";
import sessions from "./sessions";
import shoppingCentres from "./shopping_centres";

const router = new Router();

router.use("/sessions", sessions);

router.use(authenticationMiddleware);

// All routes from this point onwards will require an active session token

router.use("/assets", assets);
router.use("/shopping_centres", shoppingCentres);

export default router;
