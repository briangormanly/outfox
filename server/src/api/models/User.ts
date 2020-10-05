import { DataTypes, Model } from 'sequelize';
import { sequelize } from "../databaseConnection";

export class User extends Model {}

User.init({
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
    },
    city: {
        type: DataTypes.STRING,
    },
    phonenum: {
        type: DataTypes.INTEGER,
    },
    email: {
        type: DataTypes.STRING,
    },
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    timestamps: false,
    tableName: 'Users' // We need to choose the table name it correlates to    
});

(async () => {
    await User.sync();
    console.log('User modle synced with DB')
 })();
