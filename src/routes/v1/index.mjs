import Router from "express";

import assets from "./assets";
import shoppingCentres from "./shopping_centres";

const router = new Router();

router.use("/assets", assets);
router.use("/shopping_centres", shoppingCentres);

export default router;
