const express = require("express");

const food = require("../models/food");

const router = express.Router();

router.get("/api/foods", (req, res) => {
  const cb = (result) => {
    res.json(result);
  };
  food.takeaway(cb);
});

router.post("/api/foods", (req, res) => {
  const payload = req.body;
  const cb = () => {
    res.redirect("/view");
  };
  food.restock(payload, cb);
});

router.post("/api/foods/:id", (req, res) => {
  const { id } = req.params;
  const cb = () => {
    res.redirect("/view");
  };
  food.devour(id, cb);
});

module.exports = router;