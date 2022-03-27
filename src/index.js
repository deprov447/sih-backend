const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DB_ADDR, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection
  .on("error", console.error.bind(console, "DB Connection error: "))
  .once("open", function () {
    console.log("MongoDB Connected successfully");
  });

const router = require("./router");

const app = express();

app.use(express.json());
app.use(router);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("SIH backend online on port ", PORT);
});
