// routes/produtos.js
const express = require('express');
const router = express.Router();
const Produto = require('../models/Produto');

/**
 * GET /api/produtos/buscar?q=termo
 * Retorna produtos cujo nome contenha 'termo' (case‑insensitive)
 */
router.get('/buscar', async (req, res) => {
  const termo = req.query.q || '';
  try {
    const regex = new RegExp(termo, 'i');
    const resultados = await Produto.find({ nome: regex });
    res.json(resultados);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

module.exports = router;
