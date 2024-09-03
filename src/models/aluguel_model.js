let nextID = 1;

const model = (aluguel, id_aluguel = nextID++) => {
  if (aluguel.nome != undefined && aluguel.nome != "") {
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
