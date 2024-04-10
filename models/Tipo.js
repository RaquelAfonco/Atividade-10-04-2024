const mongoose = require('mongoose');

const tipoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true });

const Tipo = mongoose.model('Tipo', tipoSchema);

module.exports = Tipo;
