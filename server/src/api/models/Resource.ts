import { DataTypes, Model } from 'sequelize';
import { sequelize } from "../databaseConnection";

import { User } from './User'
import { ResourceType } from './ResourceType'

export class Resource extends Model {}

Resource.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    //Foreign Key
    resourcetype: {
        type: DataTypes.INTEGER,
        references: {
          model:ResourceType,
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

    sequelize, // We need to pass the connection instance
    timestamps: false,
    tableName: 'resources' // We need to choose the table name it correlates to
});

ResourceType.belongsToMany(User, { through: Resource });
User.belongsToMany(ResourceType, { through: Resource });
