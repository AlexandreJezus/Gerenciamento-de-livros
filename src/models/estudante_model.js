let nextID = 1;

const model = (estudante, id_estudante = nextID++) => {
  if (estudante.nome != undefined && estudante.nome != "") {
    return {
      id_estudante,
      nome: estudante.nome,
      matricula: estudante.matricula,
      ano: estudante.ano,
      curso: estudante.curso,
    };
  }
};

module.exports = model;
