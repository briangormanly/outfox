import { DataTypes, Model, Deferrable } from 'sequelize';
import { sequelize } from '../databaseConnection';
import { User } from './User';
export class Group extends Model {}

// Not going to add userid since its serial meaning it should increment in the database
Group.init({
    groupid: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    groupname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    //deleted resource tyoe
    resourceapi: {
        type: DataTypes.STRING,
        defaultValue: null
    },
    datetimeadd: {
        type: DataTypes.DATE,
        defaultValue: null
    },
    datetimeremove: {
        type: DataTypes.DATE,
        defaultValue: null
    },
    createdby: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'userid',
        }
    }
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    timestamps: false,
    tableName: 'Groups' // We need to choose the table name it correlates to
});



(async () => {
    try {
        await Group.sync();
        console.log('Group synced with DB');
    } catch (error) {
        console.log(error.message);
    }
 })();