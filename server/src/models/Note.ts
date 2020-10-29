import { DataTypes, Model } from "sequelize";
import sequelize from "../middleware/databaseConnection";
import Resource from "./Resource";

class Note extends Model {
  public id: number;
  public resourceId: number;
  public noteName: string;
  public noteBody: string;
}

Note.init(
  {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
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
    tableName: "notes",
  }
);

export default Note;
