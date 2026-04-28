function criarEvento({ nome, data, preco }) {
  if (!nome || !data || !preco) {
    throw new Error('Dados inválidos para criação do evento');
  }

  return {
    id: Date.now().toString(),
    nome,
    data,
    preco
  };
}

module.exports = {
  criarEvento
};