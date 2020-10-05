import { Sequelize, DataTypes, Model } from 'sequelize';

import User from './User.ts'
import LinkOwnerType from './LinkOwnerType.ts'

const sequelize = new Sequelize('outfoxdb', 'sqlize', '', {
    host: 'localhost',
    dialect: 'postgres'
});
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
        }
        allowNull: false
    },
    createdate: {
        type: DataTypes.DATETIME,

    },
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    timestamps: false,
    tableName: 'link_t' // We need to choose the table name it correlates to
});

LinkOwnerType.belongsToMany(User, { through: Link });
User.belongsToMany(LinkOwnerType, { through: Link });

console.log(Link = sequelize.models.Link);
