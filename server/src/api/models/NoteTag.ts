import { Sequelize, DataTypes, Model } from 'sequelize';
import { Note } from './Note';
import { Tag } from './Tag';
import { User } from './User';
import { sequelize } from '../databaseConnection';

export class NoteTag extends Model { }

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
			model: User,
			key: 'userId'
		}
	},
},
	{
		sequelize,
		timestamps: false,
		tableName: 'notetags',
	});


(async () => {
	await NoteTag.sync();
	console.log('NoteTag model synced with DB')
})()