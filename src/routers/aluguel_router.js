const express = require("express");
const aluguel_controller = require("../controllers/aluguel_controller.js");
const aluguel_router = express.Router();

aluguel_router.get("/", (req, res) => {
  res.json(aluguel_controller.index());
});

aluguel_router.get("/:id", (req, res) => {
  res.json(aluguel_controller.show(req.params.id));
});

aluguel_router.post("/", (req, res) => {
  const code = aluguel_controller.store(req.body);
  res.status(code).json();
});

aluguel_router.put("/:id", (req, res) => {
  const code = aluguel_controller.update(req.body, req.params.id);
  res.status(code).json();
});

aluguel_router.delete("/:id", (req, res) => {
  aluguel_controller.destroy(req.params.id);
  res.json();
});

module.exports = aluguel_router;
