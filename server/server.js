const express = require("express");
const app = express();
const sequelize = require("./config/db/dbConnection");
const routes = require("./routes");

const PORT = process.env.port || 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);

(async () => {
  await sequelize.sync({ force: false });
  app.listen(PORT, () => {
    console.log("Server is live at: http://localhost:3001");
  });
})();
