import { Sequelize, DataTypes, Model } from 'sequelize';

import User from './User.ts'
import ResourceType from './ResourceType.ts'

const sequelize = new Sequelize('outfoxdb', 'sqlize', '', {
    host: 'localhost',
    dialect: 'postgres'
});
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

console.log(Resource = sequelize.models.Resource);
