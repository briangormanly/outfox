import { DataTypes, Model } from "sequelize";
import { sequelize } from "../databaseConnection";

import User from "./User";
import ResourceType from "./ResourceType";

class Resource extends Model {
  public resourcetype: number;
  public creatorid: number;
}

Resource.init(
  {
    resourcetype: {
      type: DataTypes.INTEGER,
      references: {
        model: ResourceType,
        key: "id",
      },
    },
    creatorid: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
    },
  },
  {
    sequelize, // We need to pass the connection instance
    timestamps: false,
    tableName: "resources", // We need to choose the table name it correlates to
  }
);

export default Resource;
