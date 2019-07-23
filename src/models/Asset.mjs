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
        allowNull: false,
      },
      dimensions: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      sequelize,
      tableName: "asset",
    }
  );

  return Asset;
};
