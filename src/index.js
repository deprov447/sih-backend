const express = require("express");
require("dotenv").config();
const router = require("./router");

const app = express();

app.use(express.json());
app.use(router);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("SIH backend online on port ", PORT);
});
