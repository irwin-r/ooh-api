import Boom from "@hapi/boom";
import Router from "express";

import asyncMiddleware from "../../../middlewares/async";
import { ShoppingCentre } from "../../../models";

import {
  DELETE_SHOPPING_CENTRE_SCHEMA,
  GET_SHOPPING_CENTRE_SCHEMA,
  PATCH_SHOPPING_CENTRE_SCHEMA,
  POST_SHOPPING_CENTRE_SCHEMA,
  PUT_SHOPPING_CENTRE_SCHEMA,
} from "./schema";

const router = Router({ mergeParams: true });

router.get(
  "/",
  asyncMiddleware(async (req, res) => {
    res.json(await ShoppingCentre.findAll());
  })
);

router.get(
  "/:shoppingCentreId",
  GET_SHOPPING_CENTRE_SCHEMA,
  asyncMiddleware(async (req, res) => {
    const shoppingCentre = await ShoppingCentre.findByPk(req.params.shoppingCentreId);

    if (!shoppingCentre) {
      throw Boom.notFound();
    }

    res.json(shoppingCentre);
  })
);

router.post(
  "/",
  POST_SHOPPING_CENTRE_SCHEMA,
  asyncMiddleware(async (req, res) => {
    const shoppingCentre = await ShoppingCentre.create(req.body);

    if (!shoppingCentre) {
      throw Boom.internal();
    }

    res.status(201).json(shoppingCentre);
  })
);

async function update(req, res) {
  const shoppingCentre = await ShoppingCentre.findByPk(req.params.shoppingCentreId);

  if (!shoppingCentre) {
    throw Boom.notFound();
  }

  for (const [key, value] of Object.entries(req.body)) {
    shoppingCentre[key] = value;
  }

  await shoppingCentre.save();

  return res.json(shoppingCentre);
}

router.patch("/:shoppingCentreId", PATCH_SHOPPING_CENTRE_SCHEMA, asyncMiddleware(update));
router.put("/:shoppingCentreId", PUT_SHOPPING_CENTRE_SCHEMA, asyncMiddleware(update));

router.delete(
  "/:shoppingCentreId",
  DELETE_SHOPPING_CENTRE_SCHEMA,
  asyncMiddleware(async (req, res) => {
    const shoppingCentre = await ShoppingCentre.findByPk(req.params.shoppingCentreId);

    if (!shoppingCentre) {
      throw Boom.notFound();
    }

    await shoppingCentre.destroy();

    res.end();
  })
);

export default router;
