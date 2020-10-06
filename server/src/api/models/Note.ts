import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../databaseConnection';
import { ResourceVersion } from './ResourceVersion';

export class Note extends Model{}

Note.init({
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
		tableName: 'Notes'
	});


