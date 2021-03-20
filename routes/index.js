//Inicializando o express e o router
const express = require('express');
const routes = express.Router();

//Inicializando os controllers
const auth = require('../controllers/authController');
const verify = require('../controllers/validationController');
const initial = require('../controllers/indexController');
const StorageController = require('../controllers/storageController');
const users = require('../controllers/usersController');


//Rotas
routes.get('/getUsers', verify, users.listUsers);
routes.post('/registerUser', verify, users.createUser);
routes.put('/updateUser/:id', verify, users.updateUser);
routes.delete('/deleteUser/:id', verify, users.excludeUser);
routes.get('/', initial);
routes.post('/login', auth.login);
routes.post('/logout', auth.logout);
routes.get('/storage', verify, StorageController.list);
routes.get('/storage/:id', verify, StorageController.show);
routes.post('/storage/createProduct', verify, StorageController.create);
routes.put('/storage/updateProduct/:id', verify, StorageController.update);
routes.delete('/storage/deleteProduct/:id', verify, StorageController.delete);

//Exportando rotas
module.exports = routes;