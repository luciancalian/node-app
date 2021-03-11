const express = require("express");
const httpRequest = require("https");
const app = express();
const port = 3000;

app.get("/ec2", (req, res) => {
  res.send("Hello EC2 build!");
});

app.get("/api/new-route", (req, res) => {
  res.send("Hello Prod!");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
