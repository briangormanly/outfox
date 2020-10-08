import { DataTypes, Model } from "sequelize";
import sequelize from "../databaseConnection";

import User from "./User";
import LinkOwnerType from "./LinkOwnerType";

export class Link extends Model {
  public id: number;
  public linkownertype: number;
  public linkownerid: number;
  public createdate: Date;
}

Link.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    //Foreign Key
    linkownertype: {
      type: DataTypes.INTEGER,
      references: {
        model: LinkOwnerType,
        key: "id",
      },
    },
    //Foreign Key
    linkownerid: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
      allowNull: false,
    },
    createdate: {
      type: DataTypes.DATE,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    timestamps: false,
    tableName: "links", // We need to choose the table name it correlates to
  }
);

export default LinkOwnerType;
