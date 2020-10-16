import { DataTypes, Model } from "sequelize";
import sequelize from "../middleware/databaseConnection";

import User from "./User";

class Resource extends Model {}

Resource.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
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
    linkurl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    copiedfrom:{
      type: DataTypes.INTEGER,
      references: {
        model: Resource,
        key: "id",
      },
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
    timestamps: true,
    tableName: "resources", // We need to choose the table name it correlates to
  }
);

export default Resource;
