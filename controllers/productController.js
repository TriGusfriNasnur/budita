const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Products = require('../models/productsModel');
/**const User = require('../models/userModel');**/

const secret = 'rahasia';

/**exports.register = (req, res) => {
  const { name, email, password } = req.body;
  const hashed = bcrypt.hashSync(password, 10);
  const newUser = { name, email, password: hashed };

  User.create(newUser, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'User registered' });
  });
};
    
exports.login = (req, res) => {
  const { email, password } = req.body;

  Products.findByUserId(email, (err, results) => {
    if (err || results.length === 0) return res.status(400).json({ message: 'User not found' });

    const user = results[0];
    const match = bcrypt.compareSync(password, user.password);
    if (!match) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id, email: user.email }, secret, { expiresIn: '1d' });
    res.json({ token });
  });
};**/

exports.getAll = (req, res) => {
  Products.findAll((err, products) => {
    if (err) return res.status(500).json(err);
    res.json(products);
  });
};

exports.getOne = (req, res) => {
  Products.findById(req.params.id, (err, products) => {
    if (err || products.length === 0) return res.status(404).json({ message: 'Product not found' });
    res.json(products[0]);
  });
};

exports.update = (req, res) => {
  Products.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Product updated' });
  });
};

exports.remove = (req, res) => {
  Products.delete(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Product deleted' });
  });
};