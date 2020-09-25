const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const ProductsCtrl = require('../controllers/productsCtrl.js');

router.get('/products', ProductsCtrl.getByProducts);
router.get('/product/:id', ProductsCtrl.getProduct);
router.post('/product', ProductsCtrl.createProduct);
router.put('/product', ProductsCtrl.updateProduct);
router.delete('/product', ProductsCtrl.deleteProduct);



module.exports = router;