require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./models");
const app = express();
const indexRouter = require("./routers/index");

const corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}.`);
});