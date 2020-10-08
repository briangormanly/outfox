import { DataTypes, Model } from "sequelize";
import sequelize from "../middleware/databaseConnection";

import Note from "./Note";
import Tag from "./Tag";
import User from "./User";

class NoteTag extends Model {
  public id: number;
  public tagId: number;
  public createDate: string;
  public createdBy: number;
}

NoteTag.init(
  {
    noteId: {
      type: DataTypes.INTEGER,
      references: {
        model: Note,
        key: "id",
      },
    },
    tagId: {
      type: DataTypes.INTEGER,
      references: {
        model: Tag,
        key: "id",
      },
    },
    createDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdBy: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    tableName: "noteTags",
  }
);

export default NoteTag;
