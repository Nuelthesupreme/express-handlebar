const express = require("express");

const food = require("../models/food");

const router = express.Router();

router.get("/view", function (req, res) {
  const cb = (result) => {
    res.render("devour", result);
  };
  food.takeaway(cb);
});

module.exports = router;
