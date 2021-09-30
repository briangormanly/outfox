import { DataTypes, Model } from "sequelize";
import sequelize from "../middleware/databaseConnection";
import User from "./User";

class Lessons extends Model{
    public id: number;
    public description: string;
    public creatorid: number;
    public mutable: boolean;
}

Lessons.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        creatorid: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
              model: User,
              key: "id",
            },
        },
        mutable:{
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    },
    {sequelize, timestamps: true, tableName: "lessons"}
);

export default Lessons;