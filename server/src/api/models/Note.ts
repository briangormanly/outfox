import { DataTypes, Model } from 'sequelize';
import { sequelize } from "../databaseConnection";

import { ResourceVersion } from './ResourceVersion';

export class Note extends Model {}

Note.init({
  resourceversionid: {
    type: DataTypes.INTEGER,
    references:{
      model: ResourceVersion,
      key: "id"
    }
  },
  notename: {
    type: DataTypes.STRING,
    allowNull: false
  },
  notebody: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    timestamps: false,
    tableName: 'Notes' // We need to choose the table name it correlates to
});

ResourceVersion.hasMany(Note);

(async () => {
  await Note.sync();
  console.log('Note synced with DB')
})();
