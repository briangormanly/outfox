import { Sequelize, DataTypes, Model } from 'sequelize';

import { Resource } from './Resource'
import { Link } from './Link'

const sequelize = new Sequelize('outfoxdb', 'sqlize', '', {
    host: 'localhost',
    dialect: 'postgres'
});
export class ResourceVersion extends Model {}

ResourceVersion.init({
  resourceid: {
    type: DataTypes.INTEGER,
    references:{
      model: Resource,
      key: "id"
    },
    allowNull: false
  },
  versionid: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  linkid: {
    type: DataTypes.INTEGER,
    references:{
      model: Link,
      key: "id"
    },
    allowNull: false
  },
  mutable: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  resourcename: {
    type: DataTypes.STRING,
    allowNull: false
  },
  resourcelinkurl: {
    type: DataTypes.STRING,
    allowNull: false
  },

}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    timestamps: false,
    tableName: 'resourceversion_t' // We need to choose the table name it correlates to
});

Resource.belongsToMany(Link, { through: ResourceVersion });
Link.belongsToMany(Resource, { through: ResourceVersion });
