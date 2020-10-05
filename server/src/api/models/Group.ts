import { DataTypes, Model, Deferrable } from 'sequelize';
import { sequelize } from '../databaseConnection';
import GroupsController from '../controllers/GroupsController';
import { User } from './User';

export class Group extends Model {}

Group.init({
    groupid: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    groupname: {
        type: DataTypes.STRING,
        allowNull: false
    },
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
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    timestamps: false,
    tableName: 'groups', // We need to choose the table name it correlates to
});

(async () => {
  try {
    await Group.sync();
    console.log('Group synced with DB');
  } catch (error) {
    console.log(error.message);
    }
  })();
