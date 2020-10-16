import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../databaseConnection';

import { Note } from './Note';
import { Tag } from './Tag';
import User from './User';

export class NoteTag extends Model { }

NoteTag.init({
	noteId: {
		type: DataTypes.INTEGER,
		references: {
			model: Note,
			key: 'id'
		}
	},
	tagId: {
		type: DataTypes.INTEGER,
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
		type: DataTypes.INTEGER,
		references: {
			model: User,
			key: 'id'
		}
	},
},
	{
		sequelize,
		timestamps: false,
		tableName: 'noteTags',
	});

Note.belongsToMany(Tag, { through: NoteTag });
Tag.belongsToMany(Note, { through: NoteTag });
