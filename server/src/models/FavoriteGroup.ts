import {DataTypes, Model} from "sequelize";
import sequelize from "../middleware/databaseConnection";
import Group from "./Group";
import User from "./User";
class FavoriteGroup extends Model{
    public id: number;
    public groupid: number;
    public userid: number;
}
    FavoriteGroup.init(
      {
        id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            autoIncrement: true,
            primaryKey: true,
          },
          groupid:{
              type: DataTypes.INTEGER,
              allowNull: false,
              references: {
                model: Group,
                key: "id",
              },
          },
          userid:{
              type: DataTypes.INTEGER,
              allowNull: false,
              references: {
                model: User,
                key: "id",
              },
          }

        },
        {
            // Other model options go here
            sequelize, // We need to pass the connection instance
            timestamps: false,
            tableName: "favoritegroup", // We need to choose the table name it correlates to
          } 

    );
    
export default FavoriteGroup;
