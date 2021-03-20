const Product_class = require('../models/storage');

module.exports = {
  //Listar todos os produtos
  async list(req, res){
    try{
      const product = await Product_class.findAll()
      return res.json(product);
    }catch(err){
      return console.error("Erro na listagem: ", err);
    }
  },
  //Listar produto específico
  async show(req, res){
    try {
        const product = await Product_class.findAll({where: {id: req.params.id}});
        return res.json(product);
    } catch (err) {
        return console.err("Erro na busca: ", err);
    }
},
//Criar produto
async create(req, res){
    const {title, description, quantity} = req.body;
    try {
        const product = await Product_class.create({title, description, quantity});
        return res.json(product);
    } catch (error) {
        return console.error('Erro na criação', err);
    }
},
//Atualizar produto
async update(req, res){
    const Sequelize = require('sequelize');
    const Op = Sequelize.Op
    const { title, description, quantity } = req.body;
    const id = req.params.id;
    try {
        await Product_class.update({title, description, quantity}, {where: {id: {[Op.eq]: id }}});
        return res.json({msg: `Produto ${title} atualizado com sucesso!`});
    } catch (error) {
        return res.json({msg: `Produto ${title} não foi atualizado`}, err);            
    }
},
//Deletar produto
async delete(req, res){
    try {
        await Product_class.destroy({where: {id: req.params.id }});
        return res.json({msg: `Exclusão de item de ID ${req.params.id} feita com sucesso!`});
    } catch (err) {
        return console.err("Erro na exclusão: ", err);
    }
},
}
