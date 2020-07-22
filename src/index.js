const express = require("express");
const expressHandlebars = require("express-handlebars");
const path = require("path");

const htmlRoutes = require("./routes/html-routes");
const apiRoutes = require("./routes/api-routes");

const app = express();

const PORT = process.env.PORT || 3000;

// Middleware
app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "../views/images")));

app.use(htmlRoutes);
app.use(apiRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});