const express = require('express');
const router = express.Router();

const productosController = require('../controllers/products');

router.get('/', productosController.productos);
router.get('/crear/:id', productosController.crear);
router.get('/editar/:id', productosController.editar);

router.post('/crear/:id', productosController.productoCreado);

router.put('/editar/:id', productosController.productoEditado);


module.exports = router;