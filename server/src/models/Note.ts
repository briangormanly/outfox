import { DataTypes, Model } from "sequelize";
import sequelize from "../middleware/databaseConnection";
import Resource from "./Resource";

class Note extends Model {
  public resourceId: number;
  public noteName: string;
  public noteBody: string;
}

Note.init(
  {
    resourceId: {
      type: DataTypes.INTEGER,
      references: {
        model: Resource,
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
