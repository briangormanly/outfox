import { DataTypes, Model } from "sequelize";
import sequelize from "../middleware/databaseConnection";
import Lessons from "./Lessons";
import Resource from "./Resource";

class LessonResource extends Model{
    public lessonid: number;
    public resourceid: number;
}

LessonResource.init(
    {
        lessonid:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            references:{
                model: Lessons,
                key: "id"
            }
        },
        resourceid:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            references:{
                model: Resource,
                key: "id"
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        tableName: "lessonresource"
    }
);
export default LessonResource;