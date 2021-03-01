const express = require("express");
const httpRequest = require("https");
const app = express();
const port = 3000;

const options = {
  hostname: 'reqres.in',
  port: 443,
  path: '/api/users',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
}

app.get("/new-fargate", (req, res) => {
  const newreq = httpRequest.request(options, res1 => {
    console.log(`statusCode: ${res1.statusCode}`)
    res1.on('data', d => {
      process.stdout.write(d);
      console.log(d);
    });
  });
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
