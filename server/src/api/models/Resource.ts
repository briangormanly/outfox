import { DataTypes, Model } from 'sequelize';
import { sequelize } from "../databaseConnection";

import { User } from './User'
import { ResourceType } from './ResourceType'

export class Resource extends Model {}

Resource.init({
    //Foreign Key
    resourcetype: {
        type: DataTypes.INTEGER,
        references: {
          model: ResourceType,
          key: "id"
        }
    },
    //Foreign Key
    creatorid: {
        type: DataTypes.INTEGER,
        references:{
          model:User,
          key: "id"
        }
    },
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    timestamps: false,
    tableName: 'resource_t' // We need to choose the table name it correlates to
});

ResourceType.belongsToMany(User, { through: Resource });
User.belongsToMany(ResourceType, { through: Resource });
