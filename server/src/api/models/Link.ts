import { DataTypes, Model } from 'sequelize';
import { sequelize } from "../databaseConnection.ts";

import { User } from './User'
import { LinkOwnerType } from './LinkOwnerType'

export class Link extends Model {}

Link.init({
    //Foreign Key
    linkownertype: {
        type: DataTypes.INTEGER,
        references: {
          model: LinkOwnerType,
          key: "id"
        }
    },
    //Foreign Key
    linkownerid: {
        type: DataTypes.INTEGER,
        references:{
          model:User,
          key: "id"
        },
        allowNull: false
    },
    createdate: {
        type: DataTypes.DATE,

    },
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    timestamps: false,
    tableName: 'link_t' // We need to choose the table name it correlates to
});

LinkOwnerType.belongsToMany(User, { through: Link });
User.belongsToMany(LinkOwnerType, { through: Link });
