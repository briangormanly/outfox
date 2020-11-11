import { DataTypes, Model } from "sequelize";
import sequelize from "../middleware/databaseConnection";
import User from "./User";

class Friend extends Model {
  public friendRequestid: number;
  public requesterid: number;
  public addresseeid: number;
  public status: Enumerator;
}

Friend.init(
  {
    friendRequestid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      unique: true,
      primaryKey: true,
    },
    requesterid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    addresseeid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    status: {
      type: DataTypes.ENUM("a", "r", "p"),
      defaultValue: "p",
    },
  },
  {
    sequelize, // We need to pass the connection instance
    timestamps: false,
    tableName: "friends", // We need to choose the table name it correlates to
  }
);

export default Friend;
