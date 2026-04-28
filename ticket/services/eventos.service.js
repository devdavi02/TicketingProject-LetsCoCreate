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

function criarEvento({ nome, data, preco }) {
  const novoEvento = {
    id: Date.now().toString(),
    nome,
    data,
    preco
  };

  eventos.push(novoEvento);

  return novoEvento;
}

module.exports = {
  listarEventos,
  criarEvento
};