import { DataTypes, Model } from "sequelize";
import sequelize from "../databaseConnection";

import Resource from "./Resource";
import Link from "./Link";

class ResourceVersion extends Model {
  public id: number;
  public resourceid: number;
  public versionid: number;
  public linkid: number;
  public mutable: boolean;
  public resourcename: string;
  public resourcelinkurl: string;
}

ResourceVersion.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true, //IMPORTANT: database does not sync without determining unique key
    },
    resourceid: {
      type: DataTypes.INTEGER,
      references: {
        model: Resource,
        key: "id",
      },
      allowNull: false,
    },
    versionid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    linkid: {
      type: DataTypes.INTEGER,
      references: {
        model: Link,
        key: "id",
      },
      allowNull: false,
    },
    mutable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    resourcename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    resourcelinkurl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    timestamps: false,
    tableName: "resourceVersions", // We need to choose the table name it correlates to
  }
);
export default ResourceVersion;
