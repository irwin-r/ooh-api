import Celebrate from "celebrate";

// Celebrate is set up funnily so we can't import these directly :(
const { celebrate, Joi } = Celebrate;

export const GET_SHOPPING_CENTRE_SCHEMA = celebrate({
  params: {
    shoppingCentreId: Joi.string()
      .uuid({ version: "uuidv4" })
      .required(),
  },
});

export const POST_SHOPPING_CENTRE_SCHEMA = celebrate({
  body: {
    name: Joi.string().required(),
    address: Joi.string().required(),
  },
});

export const PATCH_SHOPPING_CENTRE_SCHEMA = celebrate({
  params: {
    shoppingCentreId: Joi.string()
      .uuid({ version: "uuidv4" })
      .required(),
  },
  body: {
    name: Joi.string(),
    address: Joi.string(),
  },
});

export const PUT_SHOPPING_CENTRE_SCHEMA = celebrate({
  params: {
    shoppingCentreId: Joi.string()
      .uuid({ version: "uuidv4" })
      .required(),
  },
  body: {
    name: Joi.string().required(),
    address: Joi.string().required(),
  },
});

export const DELETE_SHOPPING_CENTRE_SCHEMA = celebrate({
  params: {
    shoppingCentreId: Joi.string()
      .uuid({ version: "uuidv4" })
      .required(),
  },
});
