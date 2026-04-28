const eventosService = require('../services/eventos.service');

function listarEventos(req, res) {
  const eventos = eventosService.listarEventos();
  res.json(eventos);
}

function criarEvento(req, res) {
  try {
    const novoEvento = eventosService.criarEvento(req.body);
    res.status(201).json(novoEvento);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
}

module.exports = {
  listarEventos,
  criarEvento
};