import { DataTypes, Model } from 'sequelize';
import { ResourceVersion } from './ResourceVersion';

import { sequelize } from '../databaseConnection';
export class Note extends Model{}

Note.init({

	/*
		 Primary keys are auto generated if left out, by default they are named 'id'
		 handeled by Sequelize.sync();
	*/
	// noteId: {
	// 	type: DataTypes.INTEGER,
	// 	primaryKey: true
	// },
	resourceVersionId: {
		type: DataTypes.INTEGER,
		references: {
			model: ResourceVersion,
			key: 'id'
		}
	},
	noteName: {
		type: DataTypes.STRING,
		allowNull: false
	},
	noteBody: {
		type: DataTypes.STRING,
		allowNull: false
	},
	}, {
		sequelize,
		timestamps: false,
		tableName: 'notes'
	});

(async () => {
  await Note.sync();
  console.log('Note synced with DB')
})();
