// Importa o módulo 'express', que é um framework web para Node.js
const express = require('express');

// Importa as rotas definidas no arquivo 'routes/filmes.js'
const filmesRouter = require('./routes/filmes');

// Cria uma instância do aplicativo Express
const app = express();

// Define a porta em que o servidor irá escutar (nesse caso, 3000)
const port = 3000;

// Middleware que permite ao Express entender requisições com JSON no corpo
app.use(express.json());

// Define que todas as rotas que começarem com '/api/filmes' serão tratadas pelo 'filmesRouter'
app.use('/api/filmes', filmesRouter);

// Inicia o servidor e faz ele escutar na porta definida. Quando estiver rodando, mostra a URL no terminal.
app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
});

// Exporta o app (útil para testes automatizados ou integração com outros arquivos)
module.exports = app;
