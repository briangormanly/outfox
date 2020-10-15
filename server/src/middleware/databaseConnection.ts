import { Sequelize } from "sequelize";
const sequelize = new Sequelize("outfoxdb", "sqlize", "", {
  host: "localhost",
  username: "sqlize",
  dialect: "postgres",
  logging: false,
});

export default sequelize;
