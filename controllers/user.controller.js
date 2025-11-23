const User = require('../models/user.model');

exports.getAll = (req, res) => {
  User.getAll((err, result) => {
    if (err) return res.send(err);
    res.json(result);
  });
};

exports.getById = (req, res) => {
  User.getById(req.params.id, (err, result) => {
    if (err) return res.send(err);
    res.json(result);
  });
};

exports.create = (req, res) => {
  const data = req.body;
  User.create(data, (err, result) => {
    if (err) return res.send(err);
    res.json(result);
  });
};

exports.updateProduct = (req, res) => {
    const id = req.params.id;
    const data = req.body;

    Product.update(id, data, (err, result) => {
        if (err) return res.status(500).json(err);

        return res.json({
            message: "Product updated successfully",
            data: { id, ...data }
        });
    });
};


exports.deleteProduct = (req, res) => {
    const id = req.params.id;

    Product.delete(id, (err, result) => {
        if (err) return res.status(500).json(err);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Product not found" });
        }

        return res.json({
            message: "Product deleted successfully",
            data: result
        });
    });
};
