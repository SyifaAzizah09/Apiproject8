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

exports.update = (req, res) => {
  const data = req.body;
  const id = req.params.id;

  User.update(id, data, (err, result) => {
    if (err) return res.send(err);
    res.json(result);
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  User.delete(id, (err, result) => {
    if (err) return res.send(err);
    res.json(result);
  });
};