const express = require('express');
const app = express();
const porta = 3000;

app.get('/', (req, res) => {
  res.send('Seu aplicativo está em execução!');
});

app.listen(porta, () => {
  console.log(`Servidor em execução na porta ${porta}`);
});