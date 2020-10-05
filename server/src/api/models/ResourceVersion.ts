import { DataTypes, Model } from 'sequelize';
import { sequelize } from "../databaseConnection";

import { Resource } from './Resource'
import { Link } from './Link'

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

// Sync Model to Database
(async () => {
  await ResourceVersion.sync({ force: true });
  console.log('ResourceVersion modle synced with DB')
})();
