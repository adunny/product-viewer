const { Sequelize } = require("sequelize");
let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize("product_viewer", "root", "password", {
    host: "localhost",
    dialect: "mysql",
  });
}

module.exports = sequelize;
