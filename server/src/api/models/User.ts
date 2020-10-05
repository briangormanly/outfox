import { DataTypes, Model } from 'sequelize';
import { sequelize } from "../databaseConnection";
import bcrypt  from 'bcrypt';

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
            const hi = this.getDataValue('hashpw');
            console.log(hi);
            return hi;
        },
        set(value) {
            const hashed = bcrypt.hashSync(value, 10);
            console.log(hashed);
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
    tableName: 'Users' // We need to choose the table name it correlates to    
});

(async () => {
    try {
        await User.sync();
        console.log('User synced with DB');
    } catch (error) {
        console.log(error.message);
    }
 })();
