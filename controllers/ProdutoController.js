const { json } = require("express");
const Produto = require("../models/Produto")

const ProdutoController = {
  getAll: async (req, res ) => {

const filtros = {}
const campos = Object.keys(Produto.schema.paths)

for(let campo in req.query){
  if(campos.includes(campos)){
    filtros[campo] = {$regex: new RegExp(req.query[campo], 'i')}
  }
}
 res.json(await Produto.find(filtros))
},

  //   const tipo = req.query.tipo                                                                                                                                                                                                                                                                             
  //   res.json( await Produto.find({tipo: {$regex: new RegExp(tipo, 'i')}}))
  // },

  get: async (req, res ) => {
    try {
        res.json( await Produto.findById(req.params.id))
    } catch (error) {
        res.status(404).json({error: 'error'})
    }
  },

  create: async (req, res ) => {
      try {
          
          res.json( await Produto.create(req.body))
        
    } catch (error) {
        res.status(404).json({error})
    }
  },

  update: async (req, res ) => {
      try {
          
          res.json( await Produto.findByIdAndUpdate(req.params.id, req.body))
        
    } catch (error) {
        res.status(404).json({error: 'error'})
    }
  },

  delete: async (req, res ) => {
      try {
          res.json( await Produto.findByIdAndDelete(req.params.id))
          
    } catch (error) {
        res.status(404).json({error: 'error'})
    }
  },


}

module.exports = ProdutoController;
