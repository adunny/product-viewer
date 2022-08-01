const express = require("express");
const app = express();
const sequelize = require("./config/db/dbConnection");
const PORT = process.env.port || 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

(async () => {
  await sequelize.sync({ force: false });
  app.listen(PORT, () => {
    console.log("Server is live at: http://localhost:3001");
  });
})();
