import { DataTypes, Model } from 'sequelize';
import { sequelize } from "../databaseConnection";
import bcrypt  from 'bcrypt';
import { Group } from './Group';

export class User extends Model {}

User.init({
    userid: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    hashpw: {
        type: DataTypes.STRING,

        get() {
            const passwd = this.getDataValue('hashpw');
            return passwd;
        },
        set(value) {
            const hashed = bcrypt.hashSync(value, 10);
            this.setDataValue('hashpw', hashed);
        }

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
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    timestamps: false,
    tableName: 'users' // We need to choose the table name it correlates to    
});

(async () => {
<<<<<<< HEAD
  await User.sync({ force: true });
  console.log('User modle synced with DB')
})();
=======
    try {
        await User.sync();
        console.log('User synced with DB');
    } catch (error) {
        console.log(error.message);
    }
 })();
>>>>>>> origin/backend
