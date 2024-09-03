let nextID = 1;

const model = (aluguel, id_aluguel = nextID++) => {
  if (
    aluguel.data_aluguel != undefined &&
    aluguel.data_aluguel != "" &&
    aluguel.data_devolucao != undefined &&
    aluguel.data_devolucao != ""
  ) {
    return {
      id_aluguel,
      id_livro: aluguel.id_livro,
      id_estudante: aluguel.id_estudante,
      data_aluguel: aluguel.data_aluguel,
      data_devolucao: aluguel.data_devolucao,
    };
  }
};

module.exports = model;
