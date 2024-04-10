const { json } = require("express");
const Produto_Ing = require("../models/Produto_Ing")

const Produto_IngController = {
  getAll: async (req, res ) => {

const filtros = {}
const campos = Object.keys(Produto_Ing.schema.paths)

for(let campo in req.query){
  if(campos.includes(campos)){
    filtros[campo] = {$regex: new RegExp(req.query[campo], 'i')}
  }
}
 res.json(await Produto_Ing.find(filtros))
},

  //   const tipo = req.query.tipo                                                                                                                                                                                                                                                                             
  //   res.json( await Produto_Ing.find({tipo: {$regex: new RegExp(tipo, 'i')}}))
  // },

  get: async (req, res ) => {
    try {
        res.json( await Produto_Ing.findById(req.params.id))
    } catch (error) {
        res.status(404).json({error: 'error'})
    }
  },

  create: async (req, res ) => {
      try {
          
          res.json( await Produto_Ing.create(req.body))
        
    } catch (error) {
        res.status(404).json({error})
    }
  },

  update: async (req, res ) => {
      try {
          
          res.json( await Produto_Ing.findByIdAndUpdate(req.params.id, req.body))
        
    } catch (error) {
        res.status(404).json({error: 'error'})
    }
  },

  delete: async (req, res ) => {
      try {
          res.json( await Produto_Ing.findByIdAndDelete(req.params.id))
          
    } catch (error) {
        res.status(404).json({error: 'error'})
    }
  },


}

module.exports = Produto_IngController;
