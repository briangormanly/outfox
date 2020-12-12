import { Sequelize } from "sequelize";
const sequelize = new Sequelize("outfox", "outfox", "outfoxdevpass", {
  host: "localhost",
    dialect: "mysql",
    port: 3306,
    logging: function () {},
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    dialectOptions: {
      socketPath: "/var/run/mysqld/mysqld.sock"
    },
    define: {
        paranoid: true
    }
});

export default sequelize;
