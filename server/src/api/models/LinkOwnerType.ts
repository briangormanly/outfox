import { DataTypes, Model } from "sequelize";
import sequelize from "../databaseConnection";

class LinkOwnerType extends Model {
  public linkownername: string;
  public linkownerdescription: string;
  public createdate: Date;
}

LinkOwnerType.init(
  {
    linkownername: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    linkownerdescription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    timestamps: false,
    tableName: "linkOwnerTypes", // We need to choose the table name it correlates to
  }
);

export default LinkOwnerType;
