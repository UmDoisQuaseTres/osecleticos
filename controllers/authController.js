const jwt = require('jsonwebtoken');
const dotEnv = require('dotenv');
const users = require('../models/users');

dotEnv.config();



//authentication
function login(req, res, next){
    //esse teste abaixo deve ser feito no seu banco de dados
    if(req.body.email === 'um.dois.quase.tres@gmail.com' && req.body.password === '1234'){
      //auth ok
      const id = req.body.id; //esse id viria do banco de dados
      const token = jwt.sign({ id }, process.env.SECRET, {
        expiresIn: 300 // expires in 5min
      });
      return res.json({ auth: true, token: token });
    }
    
    res.status(500).json({message: 'Login inválido!'});
}

function logout(req, res, next){
    res.json({ auth: false, token: null });
}

module.exports = {login, logout};
