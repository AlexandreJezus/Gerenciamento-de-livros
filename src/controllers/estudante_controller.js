const model = require("../models/estudante_model.js");

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

const show = (id_estudante) => db.find((el) => el.id_estudante == id_estudante);

const update = (id_estudante, body) => {
  const index = db.findIndex((el) => el.id_estudante == id_estudante);
  const novo = model(body, parseInt(id_estudante));
  if (novo && index != -1) {
    db[index] = novo;
    return 200;
  }
  return 400;
};
const destroy = (id_estudante) => {
  const index = db.findIndex((el) => el.id_estudante == id_estudante);
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
