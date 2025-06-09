const db = require('../config/db');

const History_pembelian = {
  create: (data, callback) => {
    const sql = 'INSERT INTO history_pembelian SET ?';
    db.query(sql, data, callback);
  },
  findByProduct_id: (email, callback) => {
    const sql = 'SELECT * FROM history_pembelian WHERE product_id = ?';
    db.query(sql, [email], callback);
  },
  findAll: (callback) => {
    db.query('SELECT * FROM history_pembelian', callback);
  },
  findById: (id, callback) => {
    db.query('SELECT * FROM history_pembelian WHERE id = ?', [id], callback);
  },
  update: (id, data, callback) => {
    db.query('UPDATE history_pembelian SET ? WHERE id = ?', [data, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM history_pembelian WHERE id = ?', [id], callback);
  }
};

module.exports = History_pembelian;