import { DataTypes, Model } from 'sequelize';
import { sequelize } from "../databaseConnection";

export class User extends Model {}

// Not going to add userid since its serial meaning it should increment in the database
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
    tableName: 'user_t' // We need to choose the table name it correlates to
});

(async () => {
  await User.sync({ force: true });
  console.log('User modle synced with DB')
})();
