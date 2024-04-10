const mongoose = require('mongoose');

const ingredienteSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        unique: true
    },
    descricao: String
}, { timestamps: true });

const Ingrediente = mongoose.model('Ingrediente', ingredienteSchema);

module.exports = Ingrediente;
