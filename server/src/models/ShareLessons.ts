import { DataTypes, Model } from "sequelize";
import sequelize from "../middleware/databaseConnection";
import User from "./User";
import Lessons from "./Lessons";

class ShareLessons extends Model{
    public id: number;
    public lessonid: number;
    public userid: number;
}

ShareLessons.init(
    {
        SharedID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        LessonId:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Lessons,
                key: "id"
            }
        },
        Sharedby:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: "id"
            }
        },
        UserId:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: User,
                key: "id"
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        tableName: "sharelessons"
    }
);

export default ShareLessons;