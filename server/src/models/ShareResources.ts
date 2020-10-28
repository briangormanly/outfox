import { DataTypes, Model } from "sequelize";
import sequelize from "../middleware/databaseConnection";

class ShareResource extends Model {
  public id: number;
  public groupid: number;
  public userid: number;
}

ShareResource.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    resourceid: {

    },
    userid: {

    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    timestamps: false,
    tableName: "shareresource", // We need to choose the table name it correlates to
  }
);