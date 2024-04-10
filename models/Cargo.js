const mongoose = require('mongoose');

const cargoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true });

const Cargo = mongoose.model('Cargo', cargoSchema);

module.exports = Cargo;
