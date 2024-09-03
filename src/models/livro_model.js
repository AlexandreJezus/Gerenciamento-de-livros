let nextID = 1;

const model = (livro, id_livro = nextID++) => {
  if (livro.nome != undefined && livro.nome != "") {
    return {
      id_livro,
      titulo: livro.titulo,
      autor: livro.autor,
      ano: livro.ano,
      genero: livro.genero,
    };
  }
};

module.exports = model;
