const express = require("express");
const expressHandlebars = require("express-handlebars");
var routes = require("./controllers/burgersController");
const path = require("path");



const app = express();

const PORT = process.env.PORT || 3000;

// Middleware
app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "../views/images")));

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});