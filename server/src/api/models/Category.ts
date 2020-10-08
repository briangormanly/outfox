import { DataTypes, Model } from "sequelize";
import { sequelize } from "../databaseConnection";

class Category extends Model {
  public categoryname: string;
}

// Not going to add userid since its serial meaning it should increment in the database
Category.init(
  {
    categoryname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    timestamps: false,
    tableName: "categories", // We need to choose the table name it correlates to
  }
);

export default Category;
