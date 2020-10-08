import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../databaseConnection";
import bcrypt from "bcrypt";

class User extends Model {
  public id: number;
  public username: string;
  public hashpw: string;
  public firstname: string;
  public lastname: string;
  public country: string;
  public city: string;
  public phonenum: string;
  public email: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hashpw: {
      type: DataTypes.STRING,

      // Code for the password getting and setting could be better in the Uesr controller
      get() {
        const passwd = this.getDataValue("hashpw");
        return passwd;
      },
      set(value) {
        const hashed = bcrypt.hashSync(value, 10);
        this.setDataValue("hashpw", hashed);
      },
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    phonenum: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    timestamps: false,
    tableName: "users", // We need to choose the table name it correlates to
  }
);

export default User;
