<<<<<<< HEAD
import { DataTypes, Model } from 'sequelize';
import { sequelize } from "../databaseConnection";

export class Group extends Model {}

// Not going to add userid since its serial meaning it should increment in the database
Group.init({
=======
import { Sequelize, DataTypes, Model } from 'sequelize';
const sequelize = new Sequelize('outfoxdb', 'johngustafson', '', {
    host: 'localhost',
    dialect: 'postgres'
});

export class Group extends Model {}

Group.init({
    groupid: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        allowNull: false
    },
>>>>>>> UserController
    groupname: {
        type: DataTypes.STRING,
        allowNull: false
    },
<<<<<<< HEAD
    //deleted resource tyoe
=======
    resourcetype: {
        type: DataTypes.STRING,
        allowNull: false
    },
>>>>>>> UserController
    resourceapi: {
        type: DataTypes.STRING,
        allowNull: false
    },
    datetimeadd: {
<<<<<<< HEAD
        type: DataTypes.DATE,
    },
    datetimeremove: {
        type: DataTypes.DATE,
        defaultValue: null
    },
=======
        type: DataTypes.STRING
    },
    datetimeremove: {
        type: DataTypes.STRING
    }
>>>>>>> UserController
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    timestamps: false,
    tableName: 'group_t' // We need to choose the table name it correlates to
<<<<<<< HEAD
});
=======
});
>>>>>>> UserController
