import { DataTypes, Model } from 'sequelize';
import { sequelize } from "../databaseConnection";

import { Tag } from './Tag'
import { Category } from './Category'

export class CategoryTag extends Model {}

// Not going to add userid since its serial meaning it should increment in the database
CategoryTag.init({

    username: {
        type: DataTypes.STRING,
        references: {
          model:Category,
          key: "id"
        },
        allowNull: false
    },
    firstname: {
        type: DataTypes.STRING,
        references: {
          model:Tag,
          key: "id"
        },
        allowNull: false
    },

}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    timestamps: false,
    tableName: 'CategoryTags' // We need to choose the table name it correlates to
});

Tag.belongsToMany(Category, { through: CategoryTag });
Category.belongsToMany(Tag, { through: CategoryTag });
