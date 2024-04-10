const mongoose = require('mongoose')

const schema = mongoose.Schema({
    nome: String, 
}, {timestamps: true})

const Cliente = mongoose.model('Cliente', schema)

module.exports = Cliente
