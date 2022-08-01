const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("product_viewer", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
