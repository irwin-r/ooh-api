import Boom from "@hapi/boom";
import Router from "express";

import { Asset } from "../../../models";
import asyncMiddleware from "../../../middlewares/async";

import {
  DELETE_ASSET_SCHEMA,
  GET_ASSET_SCHEMA,
  PATCH_ASSET_SCHEMA,
  POST_ASSET_SCHEMA,
  PUT_ASSET_SCHEMA,
} from "./schema";

const router = Router({ mergeParams: true });

router.get(
  "/",
  asyncMiddleware(async (req, res) => {
    res.json(await Asset.findAll());
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
