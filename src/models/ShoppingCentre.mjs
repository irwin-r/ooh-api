import Sequelize from "sequelize";

const { DataTypes, Model } = Sequelize;

export default sequelize => {
  class ShoppingCentre extends Model {}

  ShoppingCentre.init(
    {
      shoppingCentreId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        required: true,
      },
    },
    {
      sequelize,
      tableName: "shopping_centre",
    }
  );

  ShoppingCentre.hasMany(sequelize.models.Asset, {
    foreignKey: "shoppingCentreId",
    sourceKey: "shoppingCentreId",
  });

  sequelize.models.Asset.belongsTo(ShoppingCentre, {
    foreignKey: "shoppingCentreId",
    targetKey: "shoppingCentreId",
  });

  return ShoppingCentre;
};
