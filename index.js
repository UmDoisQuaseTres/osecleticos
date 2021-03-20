//Inicializando as dependências
const express = require('express');
const api = express();
const routes = require('./routes/index');
const dotEnv = require('dotenv');
const cors = require('cors');
const path = require('path');

//Configurando o cors
api.use((req, res, next) => {
	
    res.header("Access-Control-Allow-Origin", "*");
	
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    api.use(cors());
    next();
});

//Inicializando as variaveis de ambiente
dotEnv.config();

//Configurando o EJS e pasta static
api.set('view engine', 'ejs');
api.set('views', path.join(__dirname, 'views'));

//Configurando o express para trabalhar com json
api.use(express.urlencoded({extended: false}));
api.use(express.json());

//Configurando o caminho das rotas
api.use(routes);


//Start server
api.listen(process.env.PORT, () => {
  console.log("Server running on port: "+ process.env.PORT);
});