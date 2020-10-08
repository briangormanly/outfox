import { DataTypes, Model } from "sequelize";
import { sequelize } from "../databaseConnection";

class ResourceType extends Model {
  public id: number;
  public resourcetypename: string;
  public resourcetypedescription: string;
  public resourcetypeapiurl: string;
  public resourcetypeapikey: string;
}

ResourceType.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    resourcetypename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    resourcetypedescription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    resourcetypeapiurl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    resourcetypeapikey: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize, // We need to pass the connection instance
    timestamps: false,
    tableName: "resourceTypes",
  }
);

export default ResourceType;
