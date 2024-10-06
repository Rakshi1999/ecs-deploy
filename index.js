const express = require("express");
require("dotenv").config();
const app = express();

const port = process.env.PORT || 3000;

app.get("/liveness", (req, res) => {
  res.status(200).send("I am alive");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, (err) => {
  if (err) {
    console.log("Error starting server");
  } else {
    console.log(`Server started on port ${port}`);
  }
});
