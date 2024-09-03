const model = require("../models/aluguel_model.js");

const db = [];

const index = () => db;

const store = (body) => {
  const novo = model(body);
  if (novo) {
    db.push(novo);
    return 201;
  }
  return 400;
};

const show = (id_aluguel) => db.find((el) => el.id_aluguel == id_aluguel);

const update = (id_aluguel, body) => {
  const index = db.findIndex((el) => el.id_aluguel == id_aluguel);
  const novo = model(body, parseInt(id_aluguel));
  if (novo && index != -1) {
    db[index] = novo;
    return 200;
  }
  return 400;
};
const destroy = (id_aluguel) => {
  const index = db.findIndex((el) => el.id_aluguel == id_aluguel);
  if (index != -1) {
    db.splice(index, 1);
    return 200;
  }
  return 400;
};

module.exports = {
  store,
  index,
  show,
  update,
  destroy,
};
