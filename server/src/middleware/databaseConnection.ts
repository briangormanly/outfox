import { Sequelize } from "sequelize";
const sequelize = new Sequelize("outfoxdb2", "salcosser", "salcosser123!", {
  host: "localhost",
  username: "salcosser",
  password: "salcosser123!",
  dialect: "postgres",
  logging: false,
});

export default sequelize;
