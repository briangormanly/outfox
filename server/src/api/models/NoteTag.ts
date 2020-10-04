import { Sequelize, DataTypes, Model } from 'sequelize';
const sequelize = new Sequelize('outfoxdb', 'colenielson', '', {
    host: 'localhost',
    dialect: 'postgres'
});

export class NoteTag extends Model{}

NoteTag.init({
	noteTagId: {
		type: DataTypes.NUMBER,
		primaryKey: true
	},
	noteId: {
		type: DataTypes.NUMBER,
		references: {
			model: Note,
			key: 'noteId'
		}
	},
	tagId: {
		type: DataTypes.NUMBER,
		references: {
			model: Tag,
			key: 'tagId'
		}
	},
	createDate: {
		type: DataTypes.STRING,
		allowNull: false
	},
	createdBy: {
		type: DataTypes.NUMBER,
		references: {
			model: user,
			key: 'userId'
		}
	},
	{
		sequelize,
		timestamps: false,
		tableName: 'note_t'
		(async () => {
			await NoteTag.sync({ force: true });
			console.log('NoteTag model synced with DB')
		})()
	}
	
});