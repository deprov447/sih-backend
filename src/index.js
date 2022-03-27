const express = require("express");
const router = require("./router");

const app = express();

app.use(router);

const PORT = 4000;

app.listen(4000, () => {
  console.log("SIH backend online on port ", PORT);
});
