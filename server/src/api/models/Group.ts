import { DataTypes, Model, Deferrable } from 'sequelize';
import { sequelize } from '../databaseConnection';
import GroupsController from '../controllers/GroupsController';
import { User } from './User';

export class Group extends Model { }

Group.init({

  /*
  	 Primary keys are auto generated if left out, by default they are named 'id'
  	 handeled by Sequelize.sync();
  */
    // groupid: {
    //     type: DataTypes.INTEGER,
    //     primaryKey: true
    // },
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
    createdby: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id'
      }
    },
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    timestamps: false,
    tableName: 'groups', // We need to choose the table name it correlates to
});

User.hasMany(Group /*, {foreignKey: 'createdby', sourceKey: 'id'}*/);
Group.belongsTo(User /*, {foreignKey: 'createdby', targetKey: 'id'}*/);
