const express = require('express');
const router = express.Router();
/**const userController = require('../controllers/userController');**/
const productsController = require('../controllers/productController');

const protectProducts = require('../middleware/authMiddleware');

/**router.post('/register', userController.register);
router.post('/login', userController.login);**/
router.get('/products', protectProducts, productsController.getAll);
router.get('/products/:id', protectProducts, productsController.getOne);
router.put('/products/:id', protectProducts, productsController.update);
router.delete('/products/:id', protectProducts, productsController.remove);

module.exports = router;