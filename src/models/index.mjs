import Sequelize from "sequelize";
import SequelizeMock from "sequelize-mock";

import { isTestMode } from "../utils/environment";

import AssetModel from "./Asset";
import { AssetMock, SessionMock, ShoppingCentreMock } from "./mocks";
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

const isTesting = isTestMode();

export const sequelize = new (!isTesting ? Sequelize : SequelizeMock)(
  DATABASE_NAME,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  {
    define: {
      paranoid: true,
      timestamps: true,
    },
    dialect: DATABASE_DIALECT,
    host: DATABASE_HOST,
    logging: false,
    port: DATABASE_PORT,
  }
);

export const Asset = !isTesting ? AssetModel(sequelize) : sequelize.define(...AssetMock);

export const Session = !isTesting ? SessionModel(sequelize) : sequelize.define(...SessionMock);

export const ShoppingCentre = !isTesting
  ? ShoppingCentreModel(sequelize)
  : sequelize.define(...ShoppingCentreMock);
