import { DataTypes, Model } from "sequelize";
import sequelize from "../middleware/databaseConnection";

import Tag from "./Tag";
import Category from "./Category";

/**
 * I think we need to review this model because this does not make sense.
 * For now though I am just going to get the properties ready until we start querying it.
 */
class CategoryTag extends Model {
  public ussername: number;
  public firstname: number;
}

CategoryTag.init(
  {
    username: {
      type: DataTypes.INTEGER,
      references: {
        model: Category,
        key: "id",
      },
      allowNull: false,
    },
    firstname: {
      type: DataTypes.INTEGER,
      references: {
        model: Tag,
        key: "id",
      },
      allowNull: false,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    timestamps: false,
    tableName: "categoryTags", // We need to choose the table name it correlates to
  }
);

export default CategoryTag;
