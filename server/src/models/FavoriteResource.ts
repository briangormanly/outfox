import {DataTypes, Model} from "sequelize";
import sequelize from "../middleware/databaseConnection";
import Resource from "./Resource";
import User from "./User";
class FavoriteResource extends Model{
    public id: number;
    public resourceid: number;
    public userid: number;
}
FavoriteResource.init(
      {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
          },
          resourceid:{
              type: DataTypes.INTEGER,
              allowNull: false,
              references: {
                model: Resource,
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
            tableName: "favoriteresource", // We need to choose the table name it correlates to
          } 

    );
    
export default FavoriteResource;
