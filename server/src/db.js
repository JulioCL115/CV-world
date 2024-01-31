require ('dotenv').config()
const { Sequelize } = require('sequelize')

const{ DB_USER, DB_PASSWORD, DB_HOST } = process.env

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/curriculum`, {
  logging: false, 
  native: false, 
});


const Cv = require('./models/cv.model.js')
const User = require('./models/user.model.js')
// IMPORTACION DE MODELOS
Cv(sequelize)
User(sequelize)

// DESESCTRUCTURACION DE MODELOS

// RELACIONES DE MODELOS

module.exports = {
    conn: sequelize,     // para importar la conexión { conn } = require('./db.js')
    ...sequelize.models // para cuando alla modelos
}