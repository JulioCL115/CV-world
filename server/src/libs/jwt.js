const jwt = require('jsonwebtoken')
const TOKEN_SECRET = require('../config.js')

const createAccesToken = (payload) =>{
    return new Promise((resolve,rejected) =>{
       jwt.sign(payload, TOKEN_SECRET, {expiresIn: '1h'}, (err, token)=>{
        err? rejected(err): resolve(token)
       })})
    }

module.exports = createAccesToken;