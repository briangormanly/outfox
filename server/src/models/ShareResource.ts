import { DataTypes, Model } from "sequelize";
import sequelize from "../middleware/databaseConnection";
import User from "./User";
import Resource from "./Resource";

class ShareResource extends Model {
  public ShareResourceId: number;
  public ResourceId: number;
  public Sharedby: number;
  public UserId: number;
}

ShareResource.init(
  {
    ShareResourceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    ResourceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Resource,
        key: "id",
      },
    },
    Sharedby: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    timestamps: false,
    tableName: "shareresource", // We need to choose the table name it correlates to
  }
);

export default ShareResource;
