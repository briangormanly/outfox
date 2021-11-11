import { DataTypes, Model } from "sequelize";
import sequelize from "../middleware/databaseConnection";
import File from "./File";
import User from "./User";

class Resource extends Model {
  public id: number;
  public type: string;
  public title: string;
  public description: string;
  public link: string;
  public uri: string;
  public fileName: string;
  public mutable: boolean;
  public creatorid: number;
  public fileid: string;
}

Resource.init(
  {
    id: {
      type: DataTypes.INTEGER,
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
    link: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    uri: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fileName: {
      type: DataTypes.STRING,
    },
    mutable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    creatorid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: User,
        key: "id",
      },
    },
    fileid:{
      type: DataTypes.STRING,
      allowNull: true,
      references:{
        model: File,
        key: "uuid"
      }
    }
  },
  {
    sequelize, // We need to pass the connection instance
    timestamps: true,
    tableName: "resources", // We need to choose the table name it correlates to
  }
);

export default Resource;
