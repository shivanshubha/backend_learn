require("dotenv").config();
const express = require("express");

const app = express();

// const port = 4000;

app.get("/", (req, res) => {
  res.send("Your now the home page");
});
app.get("/twitter", (req, res) => {
  res.send("Your now the twitter page");
});
app.get("/login", (req, res) => {
  res.send("<h1>This is a login page</h1>");
});

app.get("/signup", (req, res) => {
  res.send("<h1>This is a login page</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Your Port is now working ${process.env.PORT}`);
});
