const express = require("express");
const path = require("path");
const app = express();
const sequelize = require("./config/db/dbConnection");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

(async () => {
  await sequelize.sync({ force: false });
  app.listen(PORT, () => {
    console.log("Server is live at: http://localhost:3001");
  });
})();
