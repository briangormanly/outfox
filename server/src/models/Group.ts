import { DataTypes, Model } from "sequelize";
import sequelize from "../middleware/databaseConnection";
import User from "./User";

class Group extends Model {
  public groupname: string;
  public resourceapi: string;
  public datetimeadd: Date;
  public datetimeremove: Date;
  public createdby: number;
}

Group.init(
  {
    groupname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    resourceapi: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    datetimeadd: {
      type: DataTypes.DATE,
      defaultValue: null,
    },
    datetimeremove: {
      type: DataTypes.DATE,
      defaultValue: null,
    },
    createdby: {
      type: DataTypes.INTEGER,
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
    tableName: "groups", // We need to choose the table name it correlates to
  }
);

export default Group;