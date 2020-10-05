import { DataTypes, Model } from 'sequelize';
import { sequelize } from "../databaseConnection";

import { User } from './User'
import { Tag } from './Tag'
import { Note } from './Note'

export class NoteTag extends Model{}

NoteTag.init({
	noteid: {
		type: DataTypes.INTEGER,
		references: {
			model: Note,
			key: 'id'
		}
	},
	tagid: {
		type: DataTypes.INTEGER,
		references: {
			model: Tag,
			key: 'id'
		}
	},
	createDate: {
		type: DataTypes.DATE,
	},
	createdBy: {
		type: DataTypes.INTEGER,
		references: {
			model: User,
			key: 'id'
		}
	},
}, {
  sequelize, // We need to pass the connection instance
  timestamps: false,
  tableName: 'NoteTags' // We need to choose the table name it correlates to
  });

  Note.belongsToMany(Tag, { through: NoteTag });
  Tag.belongsToMany(Note, { through: NoteTag });
  User.hasMany(NoteTag);

  (async () => {
	await NoteTag.sync();
	console.log('NoteTag synced with DB')
  })();
