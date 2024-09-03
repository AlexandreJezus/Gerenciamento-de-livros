const express = require("express");
const estudante_controller = require("../controllers/estudante_controller.js");
const estudante_router = express.Router();

estudante_router.get("/", (req, res) => {
  res.json(estudante_controller.index());
});

estudante_router.get("/:id", (req, res) => {
  res.json(estudante_controller.show(req.params.id));
});

estudante_router.post("/", (req, res) => {
  const code = estudante_controller.store(req.body);
  res.status(code).json();
});

estudante_router.put("/:id", (req, res) => {
  const code = estudante_controller.update(req.body, req.params.id);
  res.status(code).json();
});

estudante_router.delete("/:id", (req, res) => {
  estudante_controller.destroy(req.params.id);
  res.json();
});

module.exports = estudante_router;
