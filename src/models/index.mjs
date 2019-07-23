import Sequelize from "sequelize";

import AssetModel from "./Asset";
import SessionModel from "./Session";
import ShoppingCentreModel from "./ShoppingCentre";

const {
  DATABASE_DIALECT = "postgres",
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_PASSWORD,
  DATABASE_PORT,
  DATABASE_USERNAME,
} = process.env;

export const sequelize = new Sequelize(DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD, {
  define: {
    paranoid: true,
    timestamps: true,
  },
  dialect: DATABASE_DIALECT,
  host: DATABASE_HOST,
  logging: false,
  port: DATABASE_PORT,
});

export const Asset = AssetModel(sequelize);
export const Session = SessionModel(sequelize);
export const ShoppingCentre = ShoppingCentreModel(sequelize);
