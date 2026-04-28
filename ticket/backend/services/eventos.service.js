const { criarEvento } = require('../models/evento.model');

let eventos = [
  {
    id: "1",
    nome: "Festa Universitária",
    data: "2026-05-10",
    preco: 50
  }
];

function listarEventos() {
  return eventos;
}

function criarEventoService(dados) {
  const novoEvento = criarEvento(dados);

  eventos.push(novoEvento);

  return novoEvento;
}

module.exports = {
  listarEventos,
  criarEvento: criarEventoService
};