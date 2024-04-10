const mongoose = require('mongoose');

const formaPgSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true });

const Forma_Pg = mongoose.model('Forma_Pg', formaPgSchema);

module.exports = Forma_Pg;
