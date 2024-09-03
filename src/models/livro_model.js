let nextID = 1;

const model = (livro, id_livro = nextID++) => {
  if (
    livro.titulo != undefined &&
    livro.titulo != "" &&
    livro.autor != undefined &&
    livro.autor != "" &&
    livro.ano != undefined &&
    livro.ano != "" &&
    livro.ano != isNaN &&
    livro.genero != undefined &&
    livro.genero != ""
  ) {
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
