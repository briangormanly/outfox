import { Sequelize } from "sequelize";
const sequelize = new Sequelize("outfoxdb", "salcosser", "salcosser123!", {
  host: "pg.terramisha.com",
  username: "salcosser",
  password: "salcosser123!",
  dialect: "postgres",
  logging: false,
});

export default sequelize;
