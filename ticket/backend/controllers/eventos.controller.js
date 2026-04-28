const eventosService = require('../services/eventos.service');

function listarEventos(req, res) {
  const eventos = eventosService.listarEventos();
  res.json(eventos);
}

function criarEvento(req, res) {
  const novoEvento = eventosService.criarEvento(req.body);
  res.status(201).json(novoEvento);
}

module.exports = {
  listarEventos,
  criarEvento
};