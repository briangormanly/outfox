import { Sequelize, DataTypes, Model } from 'sequelize';

import ResourceVersion from './ResourceVersion.ts';

const sequelize = new Sequelize('outfoxdb', 'sqlize', '', {
    host: 'localhost',
    dialect: 'postgres'
});
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
    tableName: 'note_t' // We need to choose the table name it correlates to
});

ResourseVersion.hasMany(Note);

console.log(Note = sequelize.models.Note);
