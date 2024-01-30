const express = require('express')
const router = express.Router()

const productController = require('../controllers/product.controller')

// router.put('/update/:id', productController.updateProduct);
// router.delete('/delete/:id', productController.deleteProduct);
router.post('/create', productController.createProduct);

// router.get('/oneproduct/:id', productController.oneProduct);
router.get('/allproduct', productController.allProduct);

module.exports = router;