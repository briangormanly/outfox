import { DataTypes, Model } from "sequelize";
import sequelize from "../middleware/databaseConnection";
import Lessons from "./Lessons";
import Assignments from "./Assignments";

class LessonAssignments extends Model{
    public lessonid: number;
    public assignmentid: number;
}

LessonAssignments.init(
    {
        lessonid:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            references:{
                model: Lessons,
                key: "id"
            }
        },
        assignmentid:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            references:{
                model: Assignments,
                key: "id"
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        tableName: "lessonassignments"
    }
);
export default LessonAssignments;