const cors = require("cors");

const express = require("express");
require("dotenv").config();

const logger = require("./middleware/logger");
const errorHandler = require("./middleware/error-handler");
const itemController = require("./controllers/item");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(
  cors({
    origin: "https://react-shopping-list.onrender.com", //replace with your render API URL
  })
);
app.options("*", cors());

app.use(logger);
app.use("/api/item", itemController);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});
