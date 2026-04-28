const express = require('express');
const cors = require('cors');


const eventosRoutes = require('./routes/eventos.routes');


const app = express();

app.use(cors());
app.use(express.json());

// rota principal
app.use('/eventos', eventosRoutes);

app.listen(3001, () => {
  console.log('Servidor rodando em http://localhost:3001');
});