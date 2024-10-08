const express = require("express");

// Router
const livro_router = require("./routers/livro_router.js");
const estudante_router = require("./routers/estudante_router.js");
const aluguel_router = require("./routers/aluguel_router.js");

const app = express();
const port = 3000;

app.use(express.json());
// Rotas
app.use("/livro", livro_router);
app.use("/aluguel", aluguel_router);
app.use("/estudante", estudante_router);

// Rotas

app.listen(port, () => {
  console.log(`Sucesso na conexão ${port}`);
});
