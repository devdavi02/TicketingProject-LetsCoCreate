const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// "Banco fake" em memória
let eventos = [
  {
    id: "1",
    nome: "Festa Universitária",
    data: "2026-05-10",
    preco: 50
  }
];

// GET /eventos → listar eventos
app.get('/eventos', (req, res) => {
  res.json(eventos);
});

// POST /eventos → criar evento
app.post('/eventos', (req, res) => {
  const { nome, data, preco } = req.body;

  const novoEvento = {
    id: Date.now().toString(),
    nome,
    data,
    preco
  };

  eventos.push(novoEvento);

  res.status(201).json(novoEvento);
});

// iniciar servidor
app.listen(3001, () => {
  console.log('Servidor rodando em http://localhost:3001');
});