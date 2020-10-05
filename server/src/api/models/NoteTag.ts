import { DataTypes, Model } from 'sequelize';
import { Note } from './Note';
import { Tag } from './Tag';
import { User } from './User';
import { sequelize } from '../databaseConnection';

export class NoteTag extends Model { }

NoteTag.init({

/*
	 Primary keys are auto generated if left out, by default they are named 'id'
	 handeled by Sequelize.sync();
*/
	// noteTagId: {
	// 	type: DataTypes.NUMBER,
	// 	primaryKey: true
	// },
	noteId: {
		type: DataTypes.NUMBER,
		references: {
			model: Note,
			key: 'id'
		}
	},
	tagId: {
		type: DataTypes.NUMBER,
		references: {
			model: Tag,
			key: 'id'
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
			key: 'id'
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
