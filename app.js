const express = require("express");
const ejs = require("ejs");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");

// dotenv.config();

const port = process.env.PORT || 5003;

const app = express();
app.use(express.json());
app.use(cors());
app.set("view engine", "ejs");
app.use(express.static(path.join(process.cwd(), "public")));

const users = require("./routers/users.router");
app.use(users);

app.get("/index", (req, res) => {
  res.render("index", {
    title: "Index",
    datas: require("./models/users.json"),
  });
});

app.get("/register", (req, res) => {
  res.render("register", {
    title: "Registration",
  });
});

app.use("/:id", (req, res) => {
  const { id } = req.params;
  res.render("user", {
    title: id,
    data: require("./models/users.json").find((el) => {
      el.id == req.params.id;
    }),
  });
});

app.listen(port, () => console.log(port));
