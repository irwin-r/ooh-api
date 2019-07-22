import Sequelize from "sequelize";

const { DataTypes, Model } = Sequelize;

export default sequelize => {
  class Asset extends Model {}

  Asset.init(
    {
      assetId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        required: true,
      },
      dimensions: {
        type: DataTypes.STRING,
        required: true,
      },
      location: {
        type: DataTypes.STRING,
        required: true,
      },
      active: {
        type: DataTypes.BOOLEAN,
        required: true,
        defaultValue: true,
      },
    },
    {
      sequelize,
      tableName: "asset",
    }
  );
};
