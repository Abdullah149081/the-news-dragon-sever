const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const categories = require("./data/categories.json");
const news = require("./data/news.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Dragon is running");
});

// all categories load
app.get("/categories", (req, res) => {
  res.send(categories);
});
// all news load
app.get("/news", (req, res) => {
  res.send(news);
});

//important 1 news load
app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((n) => n._id === id);
  res.send(selectedNews);
});

// important categories way news load
app.get("/categories/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (id == 0) {
    res.send(news);
  } else {
    const categoryNews = news.filter((n) => parseInt(n.category_id) === id);
    res.send(categoryNews);
  }
});

app.listen(port, () => {
  console.log(`Dragon app is running port ${port}`);
});
