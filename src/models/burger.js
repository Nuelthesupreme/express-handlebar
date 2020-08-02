const orm = require("../config/orm");

const burger = {
  all: (cb) => {
    orm.all("burgers", (res) => {
      cb(res);
    });
  },
  create: function(name, cb) {
    orm.create("burgers", "burger_name", name, cb); 
  },
  update: function(id, cb) {
    orm.update(id, (res) => {
      cb(res);
    });
  
  }

}

module.exports = burger;

/*
const devoured = (cb) => {
  orm.getAll("devoured_foods", cb);
};

const restock = ({ food }, cb) => {
  orm.insert("foods", "name", food, cb);
};

const devour = (id, cb) => {
  orm.insert("devoured_foods", "food_id, is_devoured", `${id}, TRUE`, cb);
};

const food = {
  getAllBurgers,
  devoured,
  restock,
  devour,
};

module.exports = food;
*/