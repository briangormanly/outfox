import { DataTypes, Model } from 'sequelize';
import { sequelize } from "../databaseConnection";

import { Tag } from './Tag'
import { Category } from './Category'

export class CategoryTag extends Model { }

CategoryTag.init({

  username: {
    type: DataTypes.INTEGER,
    references: {
      model: Category,
      key: "id"
    },
    allowNull: false
  },
  firstname: {
    type: DataTypes.INTEGER,
    references: {
      model: Tag,
      key: "id"
    },
    allowNull: false
  },

}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  timestamps: false,
  tableName: 'categoryTags' // We need to choose the table name it correlates to
});


