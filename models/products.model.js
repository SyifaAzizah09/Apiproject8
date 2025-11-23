const db = require("./db.config");

const Product = {
  getAll: (result) => {
    db.query("SELECT * FROM products", (err, res) => {
      if (err) return result(err, null);
      result(null, res);
    });
  },

  getById: (id, result) => {
    db.query("SELECT * FROM products WHERE id = ?", [id], (err, res) => {
      if (err) return result(err, null);
      result(null, res[0]);
    });
  },

  create: (data, result) => {
    db.query("INSERT INTO products SET ?", data, (err, res) => {
      if (err) return result(err, null);
      result(null, { id: res.insertId, ...data });
    });
  },

  update: (id, data, result) => {
    db.query("UPDATE products SET ? WHERE id = ?", [data, id], (err, res) => {
      if (err) return result(err, null);
      result(null, res);
    });
  },

  delete: (id, result) => {
    db.query("DELETE FROM products WHERE id = ?", [id], (err, res) => {
      if (err) return result(err, null);
      result(null, res);
    });
  }
};

module.exports = Product;
