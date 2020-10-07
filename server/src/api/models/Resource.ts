import { DataTypes, Model } from 'sequelize';
import { sequelize } from "../databaseConnection";

import User, { UserInstance } from './User';
import { ResourceType } from './ResourceType'

export class Resource extends Model {}

Resource.init({
    resourcetype: {
        type: DataTypes.INTEGER,
        references: {
          model:ResourceType,
          key: "id"
        }
    },
    creatorid: {
        type: DataTypes.INTEGER,
        references:{
          model:User,
          key: "id"
        }
    },
}, {

    sequelize, // We need to pass the connection instance
    timestamps: false,
    tableName: 'resources' // We need to choose the table name it correlates to
});

