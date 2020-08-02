const express = require("express"); 
const burger = require("../models/burger")

const router = express.Router();

// get route -> index
router.get("/", function(req, res) {
    res.redirect("/burgers");
  });
//this is the first get
router.get("/burgers", function(req, res) {
    // express callback response by calling burger.selectAllBurger
    burger.all(function(burgerData) {
      // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
      res.render("devour", { burger_data: burgerData });
    });
  });

//you have to write a post request here to create the burgers when a certain url is hit
router.post("/api/foods", function(req, res) {
  burger.create(req.body.food, function(result){
    res.redirect("/");
  })
})
//you have to write a put request to update a burger to devoured
router.put("/api/foods/:id", function(req, res) {
  burger.update(req.params.id, function(result) {
    console.log(result);
    res.sendStatus(200);
  })
})

module.exports = router;