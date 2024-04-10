const mongoose = require('mongoose');

const produtoCmSchema = new mongoose.Schema({
    produto_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Produto',
        required: true
    },
    comanda_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comanda',
        required: true
    },
    quantidade: {
        type: Number,
        required: true,
        min: 1
    }
}, { timestamps: true });

const Produto_Cm = mongoose.model('Produto_Cm', produtoCmSchema);

module.exports = Produto_Cm;
