import Celebrate from "celebrate";

// Celebrate is set up funnily so we can't import these directly :(
const { celebrate, Joi } = Celebrate;

export const GET_ASSET_SCHEMA = celebrate({
  params: {
    assetId: Joi.string()
      .uuid({ version: "uuidv4" })
      .required(),
  },
});

export const POST_ASSET_SCHEMA = celebrate({
  body: {
    name: Joi.string().required(),
    dimensions: Joi.string().required(),
    shoppingCentreId: Joi.string()
      .uuid({ version: "uuidv4" })
      .required(),
    location: Joi.string().required(),
    active: Joi.boolean(), // optional -- will default to false
  },
});

export const PATCH_ASSET_SCHEMA = celebrate({
  params: {
    assetId: Joi.string()
      .uuid({ version: "uuidv4" })
      .required(),
  },
  body: {
    name: Joi.string(),
    dimensions: Joi.string(),
    shoppingCentreId: Joi.string().uuid({ version: "uuidv4" }),
    location: Joi.string(),
    active: Joi.boolean(),
  },
});

export const PUT_ASSET_SCHEMA = celebrate({
  params: {
    assetId: Joi.string()
      .uuid({ version: "uuidv4" })
      .required(),
  },
  body: {
    name: Joi.string().required(),
    dimensions: Joi.string().required(),
    shoppingCentreId: Joi.string()
      .uuid({ version: "uuidv4" })
      .required(),
    location: Joi.string().required(),
    active: Joi.boolean().required(), // optional -- will default to true
  },
});

export const DELETE_ASSET_SCHEMA = celebrate({
  params: {
    assetId: Joi.string()
      .uuid({ version: "uuidv4" })
      .required(),
  },
});
