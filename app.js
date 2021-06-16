const express = require("express");
const cors = require('cors');
const transactions = require("./controllers/transactions");

const app = express();
app.use(express.json());
app.use(cors());


app.use("/transactions", transactions)

// ROOT
app.get("/", (req, res) => {
  res.send("Basic Express App - ROOT");
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found")
})

module.exports = app;
