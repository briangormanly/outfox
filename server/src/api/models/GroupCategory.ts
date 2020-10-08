import { DataTypes, Model } from "sequelize";
import { sequelize } from "../databaseConnection";
import Group from "./Group";
import Category from "./Category";

class GroupCategory extends Model {
  public categoryid: number;
  public groupid: number;
}

GroupCategory.init(
  {
    categoryid: {
      type: DataTypes.INTEGER,
      references: {
        model: Category,
        key: "id",
      },
      allowNull: false,
    },
    groupid: {
      type: DataTypes.INTEGER,
      references: {
        model: Group,
        key: "id",
      },
      allowNull: false,
    },
    //none needed due to only keys being the only attributes
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    timestamps: false,
    tableName: "groupCategories", // We need to choose the table name it correlates to
  }
);

export default GroupCategory;
