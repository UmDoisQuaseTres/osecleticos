const Sequelize = require('sequelize');
const sequelize = require('../database/config');

const schema = 'users';

class Users_class extends Sequelize.Model{}
Users_class.init({
  name: Sequelize.STRING,
  user_name: Sequelize.STRING,
  email: Sequelize.TEXT,
  password: Sequelize.STRING,
  level: Sequelize.STRING,
}, {sequelize, modelName: 'users', schema});

sequelize.sync();

module.exports = Users_class;