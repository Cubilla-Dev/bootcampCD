const express = require('express');
const router = express.Router();

const productoController = require('../controllers/producto.controller')

//Create
router.post("", productoController.createProducto);
//Find all
router.get("", productoController.findAllProductos);
//Find One
router.get("/:id", productoController.findProducto);
//Update one
router.put("/:id", productoController.updateProducto);
//Delete one
router.delete("/:id", productoController.deletedProducto);

module.exports = router;