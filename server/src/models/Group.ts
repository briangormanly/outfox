import { DataTypes, Model } from "sequelize";
import sequelize from "../middleware/databaseConnection";
import User from "./User";

class Group extends Model {
  public id: number;
  public groupname: string;
  public datetimeadd: Date;
  public datetimeremove: Date;
  public deleted: boolean;
  public creatorid: number;
}

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
    sequelize,
    timestamps: false,
    tableName: "groups",
  }
);

export default Group;
