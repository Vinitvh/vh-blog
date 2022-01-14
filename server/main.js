const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const db = require("./queries");

const PORT = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log("Listening on port 5000...");
});

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/articles", db.getArticles);
app.post("/articles/new", db.createArticle);
