const  sequelize =require('../config/db');
const Sequelize =require('sequelize')
const  Note =sequelize.define("note",{
    text:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

module.exports=Note;