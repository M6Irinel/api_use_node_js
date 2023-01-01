const express = require("express");
const executeQuery = require("./DB.js");
const cors = require("cors");

const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3050;

const app = express();

app.use(bodyParser.json());

app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  const sql = "SELECT * FROM persone;";
  executeQuery(sql, (e, r) => res.json(r));
});

app.listen(PORT, () => {
  console.log(`App running...`, `http://localhost:${PORT}`);
});
