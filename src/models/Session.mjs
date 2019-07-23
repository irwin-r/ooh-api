import Sequelize from "sequelize";

const { DataTypes, Model } = Sequelize;

export default sequelize => {
  class Session extends Model {}

  Session.init(
    {
      token: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      expiredAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "session",
    }
  );

  return Session;
};
