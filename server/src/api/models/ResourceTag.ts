import { DataTypes, Model } from 'sequelize';
import { sequelize } from "../databaseConnection";

import { ResourceVersion } from './ResourceVersion';
import { Tag } from './Tag';
import User, { UserInstance } from './User';

export class ResourceTag extends Model {}

ResourceTag.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true
    },
    //FK
    resourceversionid: {
        type: DataTypes.INTEGER,
        references:{
          model: ResourceVersion,
          key: 'id'
        },
        allowNull: false
    },
    //FK
    tagid: {
        type: DataTypes.INTEGER,
        references:
        {
          model: Tag,
          key: 'id'
        },
        allowNull: false
    },
    createdate: {
        type: DataTypes.DATE,
    },
    //FK
    createdby: {
        type: DataTypes.INTEGER,
        references:
        {
          model: User,
          key: 'id'
        }
    },
}, {

    sequelize, // We need to pass the connection instance
    timestamps: false,
    tableName: 'resourceTags' // We need to choose the table name it correlates to
});

Tag.belongsToMany(ResourceVersion, { through: ResourceTag });
ResourceVersion.belongsToMany(Tag, { through: ResourceTag });
User.hasMany(ResourceTag);
