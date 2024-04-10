const mongoose = require('mongoose');

const comandaSchema = new mongoose.Schema({
    mesa: {
        type: String,
        required: true
    },
    funcionario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Funcionario',
        required: true
    },
    cliente: {
        type: String,
        required: true
    },
    produtos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Produto'
    }],
    total: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        enum: ['Aberta', 'Fechada'],
        default: 'Aberta'
    },
    forma_pagamento: {
        type: String,
        enum: ['Dinheiro', 'Cartão', 'Transferência'],
        required: true
    },
    data_pagamento: {
        type: Date
    },
    data: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

const Comanda = mongoose.model('Comanda', comandaSchema);

module.exports = Comanda;
