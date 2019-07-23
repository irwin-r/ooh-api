import Boom from "@hapi/boom";
import Router from "express";
import Op from "sequelize/lib/operators";

import { Asset } from "../../../models";
import asyncMiddleware from "../../../middlewares/async";

import {
  DELETE_ASSET_SCHEMA,
  GET_ALL_ASSETS_SCHEMA,
  GET_ASSET_SCHEMA,
  PATCH_ASSET_SCHEMA,
  POST_ASSET_SCHEMA,
  PUT_ASSET_SCHEMA,
} from "./schema";

const router = Router({ mergeParams: true });

router.get(
  "/",
  GET_ALL_ASSETS_SCHEMA,
  asyncMiddleware(async (req, res) => {
    const { active, limit, name, offset, shoppingCentreId } = req.query;
    const where = {};

    if (active !== undefined) {
      where.active = active;
    }

    if (name !== undefined) {
      where.name = { [Op.like]: name };
    }

    if (shoppingCentreId !== undefined) {
      where.shoppingCentreId = shoppingCentreId;
    }

    res.json(await Asset.findAll({ limit, offset, where }));
  })
);

router.get(
  "/:assetId",
  GET_ASSET_SCHEMA,
  asyncMiddleware(async (req, res) => {
    const asset = await Asset.findByPk(req.params.assetId);

    if (!asset) {
      throw Boom.notFound();
    }

    res.json(asset);
  })
);

router.post(
  "/",
  POST_ASSET_SCHEMA,
  asyncMiddleware(async (req, res) => {
    const asset = await Asset.create(req.body);

    if (!asset) {
      throw Boom.internal();
    }

    res.status(201).json(asset);
  })
);

async function update(req, res) {
  const asset = await Asset.findByPk(req.params.assetId);

  if (!asset) {
    throw Boom.notFound();
  }

  for (const [key, value] of Object.entries(req.body)) {
    asset[key] = value;
  }

  await asset.save();

  return res.json(asset);
}

router.patch("/:assetId", PATCH_ASSET_SCHEMA, asyncMiddleware(update));
router.put("/:assetId", PUT_ASSET_SCHEMA, asyncMiddleware(update));

router.delete(
  "/:assetId",
  DELETE_ASSET_SCHEMA,
  asyncMiddleware(async (req, res) => {
    const asset = await Asset.findByPk(req.params.assetId);

    if (!asset) {
      throw Boom.notFound();
    }

    await asset.destroy();

    res.end();
  })
);

export default router;
