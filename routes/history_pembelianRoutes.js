const express = require('express');
const router = express.Router();
const history_pembelian = require('../controllers/history_pembelianController');
const userController = require('../controllers/userController');
const protectHistory_Pembelian = require('../middleware/authMiddleware');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/history_pembelian', protectHistory_Pembelian, history_pembelian.getAll);
router.get('/history_pembelian/:id', protectHistory_Pembelian, history_pembelian.getOne);
router.put('/history_pembelian/:id', protectHistory_Pembelian, history_pembelian.update);
router.delete('/history_pembelian/:id', protectHistory_Pembelian, history_pembelian.remove);

module.exports = router;