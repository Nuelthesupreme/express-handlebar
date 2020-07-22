const orm = require("../config/orm");

const takeaway = (cb) => {
  orm.getAll(cb);
};

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
  takeaway,
  devoured,
  restock,
  devour,
};

module.exports = food;