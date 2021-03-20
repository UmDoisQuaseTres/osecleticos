const Users_class = require('../models/users');

  //Listar todos os produtos
  async function listUsers(req, res){
    try{
      const users = await Users_class.findAll()
      return res.json(users);
    }catch(err){
      return console.error("Erro na listagem: ", err);
    }
  }
  
//Criar usuario
async function createUser(req, res){
    const {name, user_name, email, password} = req.body;
    try {
        const users = await Users_class.create({name, user_name, email, password});
        return res.json(users);
    } catch (error) {
        return console.error('Erro na criação', err);
    }
}
//Atualizar produto
async function updateUser(req, res){
    const Sequelize = require('sequelize');
    const Op = Sequelize.Op
    const { name, user_name, email, password, level } = req.body;
    const id = req.params.id;
    try {
        await Users_class.update({name, user_name, email, password, level}, {where: {id: {[Op.eq]: id }}});
        return res.json({msg: `Usuario de id  ${id} atualizado com sucesso!`});
    } catch (error) {
        return res.json({msg: `Usuario de id ${id} não foi atualizado`}, err);            
    }
}
//Deletar produto
async function excludeUser(req, res){
    try {
        await Users_class.destroy({where: {id: req.params.id }});
        return res.json({msg: `Exclusão de usuario de ID ${req.params.id} feita com sucesso!`});
    } catch (err) {
        return console.err("Erro na exclusão: ", err);
    }
}

module.exports = { listUsers, createUser, updateUser, excludeUser };