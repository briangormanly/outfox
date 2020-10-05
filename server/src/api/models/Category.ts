import { DataTypes, Model } from 'sequelize';
import { sequelize } from "../databaseConnection";

export class Category extends Model {}

// Not going to add userid since its serial meaning it should increment in the database
Category.init({
    catergoryname: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    timestamps: false,
    tableName: 'Categories' // We need to choose the table name it correlates to
});
