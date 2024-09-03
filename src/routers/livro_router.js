const express = require("express");
const livro_controller = require("../controllers/livro_controller.js");
const livro_router = express.Router();

livro_router.get("/", (req, res) => {
  res.json(livro_controller.index());
});

livro_router.get("/:id", (req, res) => {
  res.json(livro_controller.show(req.params.id));
});

livro_router.post("/", (req, res) => {
  const code = livro_controller.store(req.body);
  res.status(code).json();
});

livro_router.put("/:id", (req, res) => {
  const code = livro_controller.update(req.body, req.params.id);
  res.status(code).json();
});

livro_router.delete("/:id", (req, res) => {
  livro_controller.destroy(req.params.id);
  res.json();
});

module.exports = livro_router;
