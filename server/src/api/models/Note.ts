import { DataTypes, Model } from "sequelize";
import { sequelize } from "../databaseConnection";
import ResourceVersion from "./ResourceVersion";

class Note extends Model {
  public resourceVersionId: number;
  public noteName: string;
  public noteBody: string;
}

Note.init(
  {
    resourceVersionId: {
      type: DataTypes.INTEGER,
      references: {
        model: ResourceVersion,
        key: "id",
      },
    },
    noteName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    noteBody: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    tableName: "Notes",
  }
);

export default Note;
