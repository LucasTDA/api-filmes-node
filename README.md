# 🎬 API REST de Filmes com Node.js e Express

Este projeto é uma **API RESTful simples e funcional** desenvolvida em **Node.js com Express**, que permite realizar operações básicas de CRUD (Create, Read, Update, Delete) em uma lista de filmes armazenada em um arquivo JSON local.

Ideal para quem está começando no back-end com Node.js e deseja aprender como construir APIs organizadas, com rotas bem definidas e persistência de dados simples utilizando o módulo `fs`.

---

## 🚀 Funcionalidades

A API permite as seguintes operações:

- 🔍 **Listar todos os filmes**  
- 🎯 **Buscar um filme por ID**
- 📝 **Cadastrar um novo filme**
- ✏️ **Atualizar informações de um filme existente**
- ❌ **Remover um filme do banco de dados**

---

## 🛠️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [File System (fs)](https://nodejs.org/api/fs.html)
- [Path](https://nodejs.org/api/path.html)

---

## 📁 Estrutura do Projeto

📦 projeto-filmes/ ├── 📂 data/ │ └── filmes.json # Base de dados local (em JSON) ├── 📂 routes/ │ └── filmes.js # Rotas e lógica de CRUD dos filmes ├── app.js # Arquivo principal que inicializa o servidor ├── package.json # Configurações e dependências do projeto

🔧 Como Executar o Projeto

1. Clone o repositório:

git clone https://github.com/seu-usuario/seu-repositorio.git

2.Instale as dependências:

npm install

3.Inicie o servidor:

node app.js

4.Acesse a API via navegador ou ferramentas como Postman ou Thunder Client:

http://localhost:3000/api/filmes


🧪 Rotas da API

Método	    -Rota	                -Descrição

GET	        -/api/filmes	            -Retorna todos os filmes

GET	        -/api/filmes/:id	        -Retorna um filme específico

POST	    -/api/filmes	            -Cadastra um novo filme

PUT	        -/api/filmes/:id	        -Atualiza um filme existente

DELETE	    -/api/filmes/:id	        -Remove um filme do sistema


🧠 Objetivos de Aprendizado

-Criar uma API RESTful do zero com Node.js

-Aplicar boas práticas de modularização de rotas

-Utilizar arquivos JSON como armazenamento de dados temporário

-Realizar operações CRUD usando JavaScript puro no back-end


👨‍💻 Autor
Lucas.

Desenvolvedor em formação e entusiasta de tecnologias backend com foco em JavaScript, Node.js e APIs REST.
