const mongoose = require('mongoose');

const produtoIngSchema = new mongoose.Schema({
    produto_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Produto',
        required: true
    },
    ingrediente_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ingrediente',
        required: true
    }
}, { timestamps: true });

const Produto_Ing = mongoose.model('Produto_Ing', produtoIngSchema);

module.exports = Produto_Ing;
