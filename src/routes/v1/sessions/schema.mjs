import Celebrate from "celebrate";

// Celebrate is set up funnily so we can't import these directly :(
const { celebrate, Joi } = Celebrate;

// eslint-disable-next-line import/prefer-default-export
export const POST_SESSION_SCHEMA = celebrate({
  body: {
    userId: Joi.string().uuid({ version: "uuidv4" }),
  },
});
