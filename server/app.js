const express = require("express");

const logger = require("./middleware/logger");
const errorHandler = require("./middleware/error-handler");
const itemController = require("./controllers/item");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(logger);
app.use("/api/item", itemController);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});
