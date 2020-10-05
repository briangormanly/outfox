import { Sequelize, DataTypes, Model } from 'sequelize';

import { User } from './User'
import { Tag } from './Tag'
import { Note } from './Note'

const sequelize = new Sequelize('outfoxdb', 'sqlize', '', {
    host: 'localhost',
    dialect: 'postgres'
});
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
  tableName: 'notetag_t' // We need to choose the table name it correlates to
  });

  Note.belongsToMany(Tag, { through: NoteTag });
  Tag.belongsToMany(Note, { through: NoteTag });
  User.hasMany(NoteTag);
