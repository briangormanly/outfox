import { DataTypes, Model } from "sequelize";
import sequelize from "../middleware/databaseConnection";
import Assignments from "./Assignments";
import Resource from "./Resource";
import User from "./User";

class Comment extends Model {
  public id: number;
  public commentedOnResource: number; // Associated Resource
  public commentedOnAssignment: number; // Associated Assignment
  public threadID: number; // Comment that this comment belongs to
  public title: string;
  public body: string;
  public createdBy: number;
}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    commentedOnResource: {
      type: DataTypes.INTEGER,
      references: {
        model: Resource,
        key: "id",
      },
    },
    commentedOnAssignment: {
      type: DataTypes.INTEGER,
      references:{
        model: Assignments,
        key: "id"
      }
    },
    threadID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Comment,
        key: "id",
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
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
    updatedAt: false,
    tableName: "Comments",
  }
);

export default Comment;
