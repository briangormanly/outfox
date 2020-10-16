import { DataTypes, Model } from "sequelize";
import sequelize from "../middleware/databaseConnection";
import User from "./User";

class Group extends Model {}

Group.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    groupname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    datetimeadd: {
      type: DataTypes.DATE,
      defaultValue: null,
    },
    datetimeremove: {
      type: DataTypes.DATE,
      defaultValue: null,
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
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
    sequelize,
    timestamps: false,
    tableName: "groups",
  }
);

export default Group;
