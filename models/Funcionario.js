const mongoose = require('mongoose');

const funcionarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 100,
        uppercase: true,
        trim: true
    },
    cpf: {
        type: String,
        required: true,
        unique: true
    },
    endereco: String,
    sexo: {
        type: String,
        enum: ['Masculino', 'Feminino', 'Outro']
    },
    telefone: String,
    cargo: String
}, { timestamps: true });

const Funcionario = mongoose.model('Funcionario', funcionarioSchema);

module.exports = Funcionario;
