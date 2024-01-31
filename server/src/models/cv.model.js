const {DataTypes} = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('Cv',{
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING
        },
        image:{
            type: DataTypes.STRING
        },
        text:{
            type: DataTypes.TEXT,

        }
    })
}