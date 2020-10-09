import { DataTypes, Model } from "sequelize";
import sequelize from "../middleware/databaseConnection";

import User from "./User";
import { time } from "console";

class Resource extends Model {
  public resourcetype: number;
  public creatorid: number;
}

Resource.init(
  {
    id: {
      type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true,
      },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mutable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
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
