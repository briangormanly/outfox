import { DataTypes, Model } from "sequelize";
import sequelize from "../middleware/databaseConnection";
import Assignments from "./Assignments";
import Resource from "./Resource";

class AssignmentResource extends Model {
  public assignmentid: number;
  public resourceid: number;
}

AssignmentResource.init(
  {
    assignmentid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: Assignments,
        key: "id",
      },
    },
    resourceid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: Resource,
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    tableName: "assignmentresources"
  }
);
export default AssignmentResource;