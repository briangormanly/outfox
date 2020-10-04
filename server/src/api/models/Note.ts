import { Sequelize, DataTypes, Model } from 'sequelize';
const sequelize = new Sequelize('outfoxdb', 'colenielson', '', {
    host: 'localhost',
    dialect: 'postgres'
});

export class Note extends Model{}

Note.init({
	noteId: {
		type: DataTypes.NUMBER,
		primaryKey: true
	},
	resourceVersionId: {
		type: DataTypes.NUMBER,
		references: {
			model: resourceVersion_t
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
	{
		sequelize,
		timestamps: false,
		tableName: 'note_t'
		(async () => {
			await Note.sync({ force: true });
			console.log('User modle synced with DB')
		})()
	});

