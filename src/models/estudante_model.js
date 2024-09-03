let nextID = 1;

const model = (estudante, id_estudante = nextID++) => {
  if (
    estudante.nome != undefined &&
    estudante.nome != "" &&
    estudante.matricula != undefined &&
    estudante.matricula != "" &&
    estudante.curso != undefined &&
    estudante.curso != "" &&
    estudante.ano != undefined &&
    estudante.ano != "" &&
    estudante.ano != isNaN
  ) {
    return {
      id_estudante,
      nome: estudante.nome,
      matricula: estudante.matricula,
      curso: estudante.curso,
      ano: estudante.ano,
    };
  }
};

module.exports = model;
