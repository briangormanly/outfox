import { DataTypes, Model} from "sequelize";
import sequelize from "../middleware/databaseConnection";
import User from "./User";

class FriendRequest extends Model {
  public id: number;
  public requestBy: number;
  public requestTo: number;
  public status: Enumerator;
}

FriendRequest.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    requestBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    requestTo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    status: {
      type: DataTypes.ENUM('a', 'r', 'p'),
    },
  },
  {
    sequelize, // We need to pass the connection instance
    timestamps: false,
    tableName: "friendrequests", // We need to choose the table name it correlates to
  }
);

export default FriendRequest;
