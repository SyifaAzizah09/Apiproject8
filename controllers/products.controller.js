const Product = require("../models/products.model");

exports.getAll = (req, res) => {
  Product.getAll((err, data) => {
    if (err) return res.status(500).send(err);
    res.json(data);
  });
};

exports.getById = (req, res) => {
  Product.getById(req.params.id, (err, data) => {
    if (err) return res.status(500).send(err);
    res.json(data);
  });
};

exports.create = (req, res) => {
  Product.create(req.body, (err, data) => {
    if (err) return res.status(500).send(err);
    res.json(data);
  });
};

exports.update = (req, res) => {
  Product.update(req.params.id, req.body, (err, data) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "Updated", data });
  });
};

exports.delete = (req, res) => {
    Product.delete(req.params.id, (err, result) => {
        if (err) return res.status(500).json(err);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json({
            message: "Deleted",
            data: result
        });
    });
};
