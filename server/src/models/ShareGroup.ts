import { DataTypes, Model } from "sequelize";
import sequelize from "../middleware/databaseConnection";

class ShareGroup extends Model {
  public id: number;
  public groupid: number;
  public userid: number;
}

ShareGroup.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    groupid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    timestamps: false,
    tableName: "sharegroup", // We need to choose the table name it correlates to
  }
);
