const express = require("express");

const app = express();

const port = 4000;

app.get("/", (req, res) => {
  res.send("I am at server 2!");
});

app.get("/test", (req, res) => {
  res.send("test for server 2 good!");
});

app.listen(port, () => {
  console.log(`Running at http://localhost:${port}`);
});
