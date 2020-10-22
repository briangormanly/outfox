import { DataTypes, Model } from "sequelize";
import sequelize from "../middleware/databaseConnection";
import User from "./User";

class Friend extends Model {
  public requesterid: number;
  public adresseeid: number;
  public status: Enumerator;
}

Friend.init(
  {
    requesterid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      references: {
        model: User,
        key: "id",
      },
    },
    adresseeid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: User,
        key: "id",
      },
    },
    status: {
      type: DataTypes.ENUM('a', 'r'),
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    timestamps: false,
    tableName: "friends", // We need to choose the table name it correlates to
  }
);

export default Friend;
