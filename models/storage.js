const Sequelize = require('sequelize');
const sequelize = require('../database/config');

const schema = 'product';

class Product_class extends Sequelize.Model{}
Product_class.init({
  title: Sequelize.STRING,
  description: Sequelize.STRING,
  quantity: Sequelize.STRING
}, {sequelize, modelName: 'product', schema});

sequelize.sync();

module.exports = Product_class;