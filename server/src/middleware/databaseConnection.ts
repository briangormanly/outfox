import { Sequelize } from "sequelize";
const sequelize = new Sequelize("outfox", "outfox", "outfoxdevpass", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

export default sequelize;
