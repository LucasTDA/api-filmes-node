// Importa o framework Express (usado para criar rotas e o servidor HTTP)
const express = require('express');

// Importa o módulo 'fs' (file system) para ler e escrever arquivos do sistema
const fs = require('fs');

// Importa o módulo 'path' para lidar com caminhos de arquivos de forma segura
const path = require('path');

// Cria um objeto de roteador do Express para organizar as rotas em outro arquivo
const router = express.Router();

// Define o caminho até o arquivo JSON que armazena os dados dos filmes
const dataPath = path.join(__dirname,'../data/filmes.json');

// Função que lê os filmes do arquivo JSON e converte para um array de objetos
const lerFilmes = () => JSON.parse(fs.readFileSync(dataPath));

// Função que salva (escreve) o array de filmes de volta no arquivo JSON
const salvarFilmes = (data) => fs.writeFileSync(dataPath, JSON.stringify(data));



    // GET todos os filmes
    router.get('/', (req,res) => {
    let filmes = lerFilmes(); // Lê os Filmes do arquivo
    res.status(200).json(filmes); // Retorna a lista de filmes como JSON
});



    // GET filme por ID
    router.get('/:id', (req,res) => {
    let filmes = lerFilmes(); // Lê os filmes
    // Busca o filme cujo id seja igual ao da URL (convertido para número)
    let filme = filmes.find(li => li.id == Number(req.params.id));

    // Se o filme não for encontrado, retorna erro 404
    if (!filme)
        return res.status(404).json({ erro: 'Filme não encontrado' });

    // Caso contrário, retorna o filme encontrado
    res.json(filme);
});



    // POST novo filme
    router.post('/', (req,res) => {
    let filmes = lerFilmes(); // Lê os filmes atuais
    let novoFilme = {
        id: Date.now(), // Gera um ID numérico único com base na hora atual
        ...req.body     // Pega os dados enviados no corpo da requisição (titulo, autor, etc.)
    };
    filmes.push(novoFilme); // Adiciona o novo filme na lista
    salvarFilmes(filmes);   // Salva a lista atualizada no arquivo JSON
    res.status(201).json(novoFilme); // Retorna o novo filme com status 201 (criado)
});



    // PUT atualizar filme
    router.put('/:id', (req, res) => {
    let filmes = lerFilmes(); // Lê os filme
    const index = filmes.findIndex(l => l.id === parseInt(req.params.id)); // Encontra o índice do filme pelo ID

    // Se não encontrar, retorna 404
    if (index === -1)
        return res.status(404).json({ mensagem: 'filme não encontrado' });

    // Atualiza o filme existente com os dados recebidos no corpo da requisição
    filmes[index] = { ...filmes[index], ...req.body };
    salvarFilmes(filmes); // Salva a lista com o filme atualizado
    res.json(filmes[index]); // Retorna o filme atualizado
});




    // DELETE filmes
    router.delete('/:id', (req, res) => {
    let filmes = lerFilmes(); // Lê os filmes
    // Remove o filme com o ID fornecido
    filmes = filmes.filter(l => l.id !== parseInt(req.params.id));
    salvarFilmes(filmes); // Salva a nova lista sem o filme removido
    res.status(204).send(); // Responde com status 204 (sem conteúdo)
});


module.exports = router;