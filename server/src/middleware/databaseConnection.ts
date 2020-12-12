import { Sequelize } from "sequelize";
/*
MySQL
*
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
*/

/*
PostgreSQL
*/
const sequelize = new Sequelize("outfox", "outfox", "outfoxdevpass", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

export default sequelize;
