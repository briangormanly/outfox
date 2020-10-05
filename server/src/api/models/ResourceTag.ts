import { DataTypes, Model } from 'sequelize';
import { sequelize } from "../databaseConnection.ts";

import { ResourceVersion } from './ResourceVersion';
import { Tag } from './Tag';
import { User } from './User';

export class ResourceTag extends Model {}

ResourceTag.init({
    //FK
    resourceversionid: {
        type: DataTypes.INTEGER,
        references:{
          model: ResourceVersion,
          key: "id"
        },
        allowNull: false
    },
    //FK
    tagid: {
        type: DataTypes.STRING,
        references:
        {
          model: Tag,
          key: "id"
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
          key: "id"
        }
    },
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    timestamps: false,
    tableName: 'resourcetag_t' // We need to choose the table name it correlates to
});

Tag.belongsToMany(ResourceVersion, { through: ResourceTag });
ResourceVersion.belongsToMany(Tag, { through: ResourceTag });
User.hasMany(ResourceTag);
