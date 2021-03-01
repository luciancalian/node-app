const express = require("express");
const app = express();
const port = 3000;

app.get("/fargate", (req, res) => {
  res.send("Hello Automated build!");
});

app.get("/new-route", (req, res) => {
  res.send("Hello Prod!");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
