import { Sequelize, DataTypes, Model } from 'sequelize';
import { ResourceVersion } from './ResourceVersion';

const sequelize = new Sequelize('outfoxdb', 'sqlize', '', {
    host: 'localhost',
    dialect: 'postgres'
});

export class Note extends Model{}

Note.init({
	noteId: {
		type: DataTypes.INTEGER,
		primaryKey: true
	},
	resourceVersionId: {
		type: DataTypes.INTEGER,
		references: {
			model: ResourceVersion,
			key: 'resourceVersionId'
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
		console.log('User modle synced with DB')
	})()

