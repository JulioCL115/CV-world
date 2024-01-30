require ('dotenv').config()
const { Sequelize } = require('sequelize')

const{ DB_USER, DB_PASSWORD, DB_HOST } = process.env

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/curriculum`, {
  logging: false, 
  native: false, 
});

// IMPORTACION DE MODELOS


// DESESCTRUCTURACION DE MODELOS

// RELACIONES DE MODELOS

module.exports = {
    conn: sequelize,     // para importar la conexión { conn } = require('./db.js')
    // ...sequelize.models // para cuando alla modelos
}