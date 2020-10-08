import { DataTypes, Model } from "sequelize";
import sequelize from "../middleware/databaseConnection";

class Tag extends Model {
  public id: number;
  public tag: string;
  public createdate: Date;
}

Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    tag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    timestamps: false,
    tableName: "tags", // We need to choose the table name it correlates to
  }
);

export default Tag;
