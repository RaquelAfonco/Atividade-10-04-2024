const express = require('express')
const Produto = require('../models/Produto')
const ProdutoController = require('../controllers/ProdutoController')
const ClienteController = require('../controllers/ClienteController')
const ComandaController = require('../controllers/ComandaController')
const FuncionarioController = require('../controllers/FuncionarioController')
const CargoController = require('../controllers/CargoController')
const Forma_PgController = require('../controllers/Forma_PgController')
const Produto_CmController = require('../controllers/Produto_CmController')
const Produto_IngController = require('../controllers/Produto_IngController')
const TipoController = require('../controllers/TipoController')
const IngredienteController = require('../controllers/IngredienteController')
const router = express.Router()

router.get('/', function(req, res){
    res.json({})
})

// Produtos
router.get('/produtos', (req, res) => ProdutoController.getAll(req, res))
router.post('/produtos',(req, res) => ProdutoController.create(req, res))
router.get('/produtos/:id', (req, res) => ProdutoController.get(req, res))
router.put('/produtos/:id',(req, res) => ProdutoController.update(req, res))
router.delete('/produtos/:id',(req, res) => ProdutoController.delete(req, res))

// Comanda
router.get('/comanda', (req, res) => ComandaController.getAll(req, res))
router.post('/comanda',(req, res) => ComandaController.create(req, res))
router.get('/comanda/:id', (req, res) => ComandaController.get(req, res))
router.put('/comanda/:id',(req, res) => ComandaController.update(req, res))
router.delete('/comanda/:id',(req, res) => ComandaController.delete(req, res))

// Funcionario
router.get('/funcionario', (req, res) => FuncionarioController.getAll(req, res))
router.post('/funcionario',(req, res) => FuncionarioController.create(req, res))
router.get('/funcionario/:id', (req, res) => FuncionarioController.get(req, res))
router.put('/funcionario/:id',(req, res) => FuncionarioController.update(req, res))
router.delete('/funcionario/:id',(req, res) => FuncionarioController.delete(req, res))

//cliente
router.get('/cliente', (req, res) => ClienteController.getAll(req, res))
router.post('/cliente',(req, res) => ClienteController.create(req, res))
router.get('/cliente/:id', (req, res) => ClienteController.get(req, res))
router.put('/cliente/:id',(req, res) => ClienteController.update(req, res))
router.delete('/cliente/:id',(req, res) => ClienteController.delete(req, res))

// Cargo
router.get('/cargo', (req, res) => CargoController.getAll(req, res))
router.post('/cargo',(req, res) => CargoController.create(req, res))
router.get('/cargo/:id', (req, res) => CargoController.get(req, res))
router.put('/cargo/:id',(req, res) => CargoController.update(req, res))
router.delete('/cargo/:id',(req, res) => CargoController.delete(req, res))

// Forma_Pg
router.get('/forma_pg', (req, res) => Forma_PgController.getAll(req, res))
router.post('/forma_pg',(req, res) => Forma_PgController.create(req, res))
router.get('/forma_pg/:id', (req, res) => Forma_PgController.get(req, res))
router.put('/forma_pg/:id',(req, res) => Forma_PgController.update(req, res))
router.delete('/forma_pg/:id',(req, res) => Forma_PgController.delete(req, res))

// Ingrediente
router.get('/ingrediente', (req, res) => IngredienteController.getAll(req, res))
router.post('/ingrediente',(req, res) => IngredienteController.create(req, res))
router.get('/ingrediente/:id', (req, res) => IngredienteController.get(req, res))
router.put('/ingrediente/:id',(req, res) => IngredienteController.update(req, res))
router.delete('/ingrediente/:id',(req, res) => IngredienteController.delete(req, res))

// Produto_Cm
router.get('/produto_cm', (req, res) => Produto_CmController.getAll(req, res))
router.post('/produto_cm',(req, res) => Produto_CmController.create(req, res))
router.get('/produto_cm/:id', (req, res) => Produto_CmController.get(req, res))
router.put('/produto_cm/:id',(req, res) => Produto_CmController.update(req, res))
router.delete('/produto_cm/:id',(req, res) => Produto_CmController.delete(req, res))

// Produto_Ing
router.get('/produto_ing', (req, res) => Produto_IngController.getAll(req, res))
router.post('/produto_ing',(req, res) => Produto_IngController.create(req, res))
router.get('/produto_ing/:id', (req, res) => Produto_IngController.get(req, res))
router.put('/produto_ing/:id',(req, res) => Produto_IngController.update(req, res))
router.delete('/produto_ing/:id',(req, res) => Produto_IngController.delete(req, res))

// Tipo
router.get('/tipo', (req, res) => TipoController.getAll(req, res))
router.post('/tipo',(req, res) => TipoController.create(req, res))
router.get('/tipo/:id', (req, res) => TipoController.get(req, res))
router.put('/tipo/:id',(req, res) => TipoController.update(req, res))
router.delete('/tipo/:id',(req, res) => TipoController.delete(req, res))

module.exports = router
