const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    trim: true
  },
  preco: {
    type: Number,
    required: true
  },
  categoria: {
    type: String,
    required: true,
    trim: true
  },
  descricao: {
    type: String,
    default: ''
  },
  imagem: {
    type: String,
    default: ''
  }
}, { timestamps: true });

module.exports = mongoose.model('Produto', ProdutoSchema);
