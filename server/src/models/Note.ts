import { DataTypes, Model } from "sequelize";
import sequelize from "../middleware/databaseConnection";
import Resource from "./Resource";

class Note extends Model {
  public resourceid: number;
  public subject: string;
  public body: string;
}

Note.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    resourceid: {
      type: DataTypes.INTEGER,
      references: {
        model: Resource,
        key: "id",
      },
    },
    subject: {
      type: DataTypes.STRING,
    },
    body: {
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
