const model = require("../models/livro_model.js");

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

const show = (id_livro) => db.find((el) => el.id_livro == id_livro);

const update = (id_livro, body) => {
  const index = db.findIndex((el) => el.id_livro == id_livro);
  const novo = model(body, parseInt(id_livro));
  if (novo && index != -1) {
    db[index] = novo;
    return 200;
  }
  return 400;
};
const destroy = (id_livro) => {
  const index = db.findIndex((el) => el.id_livro == id_livro);
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
