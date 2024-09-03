const express = require("express");
const aluguel_controller = require("../controllers/aluguel_controller.js");
const aluguel_controller = express.Router();

aluguel_controller.get("/", (req, res) => {
  res.json(aluguel_controller.index());
});

aluguel_controller.get("/:id", (req, res) => {
  res.json(aluguel_controller.show(req.params.id));
});

aluguel_controller.post("/", (req, res) => {
  const code = aluguel_controller.store(req.body);
  res.status(code).json();
});

aluguel_controller.put("/:id", (req, res) => {
  const code = aluguel_controller.update(req.body, req.params.id);
  res.status(code).json();
});

aluguel_controller.delete("/:id", (req, res) => {
  aluguel_controller.destroy(req.params.id);
  res.json();
});

module.exports = aluguel_controller;
