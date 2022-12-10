const Teams = require("./Teams.json");
const Seasons = require("./Seasons.json");
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/Constructor", (req, res) => {
  res.send(Teams.Constructor);
});

app.get("/Seasons", (req, res) => {
  res.send(Seasons);
});

app.get("/Seasons/:id", (req, res) => {
  const {
    params: { id },
  } = req;
  res.send(Seasons.Seasons[id]);
});

app.get("/Constructor/:id", (req, res) => {
  const {
    params: { id },
  } = req;
  res.send(Teams.Constructor[id]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
